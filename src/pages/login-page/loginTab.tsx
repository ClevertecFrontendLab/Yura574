import {Button, Checkbox, Form, Input} from 'antd';
import google from '../../assets/svg/google.svg';
import {useAppDispatch, useAppSelector,} from '@redux/configure-store.ts';
import {LoginType} from '../../api/apiTypes.ts';
import {Rule} from 'antd/lib/form';
import {useEffect, useState} from 'react';
import {checkEmail} from '@redux/reducers/auth/checkEmail-reducer.ts';
import {singIn} from '@redux/reducers/auth/auth-reducer.ts';
import {googleURL} from '../../api/api.ts';

export const LoginTab = () => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm();
    const [errors, setError] = useState<string[]>([])
    const prevLoc = useAppSelector(state => state.router.previousLocations)
    const prevLocation = prevLoc && prevLoc[1] && prevLoc[1].location?.pathname

    const email = sessionStorage.getItem('email')
    const handleButtonClick = () => {
        form.validateFields().then().catch(err => console.log(err))
    };

    const finish = (value: LoginType) => {
        const {email, password, rememberMe = false} = value
        sessionStorage.setItem('email', email)
        dispatch(singIn({email, password, rememberMe}))
    }
    const validatePassword: Rule = () => ({
        validator(_, value: string) {
            return new Promise((resolve, reject) => {
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                if (value && passwordRegex.test(value)) {
                    setError(errors.filter((p) => p !== 'password'))
                    resolve('');
                }
                if (!value || !passwordRegex.test(value)) {
                    !errors.includes('password') && setError([...errors, 'password'])
                    reject()
                }
            });
        },
    });

    const verifyCheckEmail = () => {
        form
            .validateFields(['email'])
            .then(() => {
                sessionStorage.setItem('email', form.getFieldValue('email'))
                dispatch(checkEmail(form.getFieldValue('email')))
            })
    }

    useEffect(() => {
        if (prevLocation === '/result/error-check-email') {
            email && dispatch(checkEmail(email))
        }

    }, [prevLocation, email, dispatch]);

    const googleHandler = () => {
        window.location.href = googleURL;
    }

    return (
        <div>
            <Form form={form} onFinish={values => finish(values)}
                  className={'loginPage_registerFormWrapper'}>
                <div className={'loginPage_inputsWrapper'}>
                    <Form.Item
                        name={'email'}
                        validateTrigger={['onBlur', 'onChange']}
                        rules={[{
                            required: true,
                            message: '',
                            type: 'email'
                        }]}
                    >
                        <Input
                            size={'large'}
                            data-test-id='login-email'
                            addonBefore={'e-mail:'}
                            className={'loginPage_inputItem'}

                        />
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                        validateTrigger={['onBlur', 'onChange']}
                        className={'loginPage_inputItem'}
                        rules={[{
                            required: true,
                            message: ''
                        },
                            validatePassword
                        ]}
                    >
                        <Input.Password size={'small'}
                                        data-test-id='login-password'
                                        placeholder={'Пароль'}
                        />
                    </Form.Item>
                </div>

                <div className={'loginPage_checkArea '}>
                    <Form.Item
                        name="rememberMe"
                        valuePropName="checked"

                    >
                        <Checkbox
                            data-test-id='login-remember'
                            defaultChecked={false}
                            className={'loginPage_rememberMe'}
                        >
                            Запомнить меня
                        </Checkbox>
                    </Form.Item>
                    <Button data-test-id='login-forgot-button' type={'link'}
                            onClick={verifyCheckEmail}
                            className={'body_regular_16'}>
                        Забыли пароль?
                    </Button>
                </div>
                <div className={'loginPage_buttonsWrapper'}>
                    <Button data-test-id='login-submit-button' size={'large'}
                            className={'loginPage_buttonPrimary'}
                            htmlType={'submit'}
                            onClick={handleButtonClick}>Войти</Button>

                    <Button onClick={googleHandler} type={'default'} size={'large'}>
                        <img className={'loginPage_svgGoogle'} src={google}
                             alt={'google'}/>
                        Войти через Google
                    </Button>

                </div>
            </Form></div>
    )
}

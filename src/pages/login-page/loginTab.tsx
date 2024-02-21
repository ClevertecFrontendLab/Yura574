import {Button, Checkbox, Form, Input} from 'antd';
import google from '../../assets/svg/google.svg';
import {useAppDispatch} from '@redux/configure-store.ts';
import {singIn} from '@redux/reducers/auth-reducer.ts';
import {LoginType} from '../../api/apiTypes.ts';
import {Rule} from 'antd/lib/form';
import {useState} from 'react';
// import {useState} from 'react';
// import {Rule} from 'antd/lib/form';
export const LoginTab = () => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm();

    const [errors, setError] = useState<string[]>([])

    const handleButtonClick = () => {
        form.validateFields()
            .then()
            .catch(err => console.log(err));
    };

    const finish = (value: LoginType) => {
        const {email, password, rememberMe = false} = value
        dispatch(singIn({email, password, rememberMe}))
    }
    const validatePassword: Rule = () => ({
        validator(_: any, value: string) {
            return new Promise((resolve, reject) => {

                const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                if (value && passwordRegex.test(value)) {
                    setError(errors.filter((p) => p !== 'password'))
                    resolve('');
                }
                if (!value || !passwordRegex.test(value)) {
                    !errors.includes('password') && setError([...errors, 'password'])
                    reject(new Error('error'))
                }
            });
        },
    });


    return (
        <Form form={form} onFinish={values => finish(values)}
              className={'loginPage_registerFormWrapper'}>
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
                <Input.Password
                    data-test-id='login-password'
                    placeholder={'Пароль'}
                />
            </Form.Item>

            <div className={'loginPage_checkArea '}>
                <Form.Item
                    name="rememberMe"
                    valuePropName="checked"
                >
                    <Checkbox
                        data-test-id='login-remember'
                        defaultChecked={false}
                    >
                        Запомнить меня
                    </Checkbox>
                </Form.Item>
                <Button data-test-id='login-forgot-button' type={'link'}
                        className={'body_regular_16'}>Забыли пароль?</Button>
            </div>
            <div className={'loginPage_buttonsWrapper'}>
                <Button data-test-id='login-submit-button' type={'primary'} htmlType={'submit'}
                        onClick={handleButtonClick}>Войти</Button>
                <Button type={'default'}><img className={'loginPage_svgGoogle'} src={google} alt={'google'}/>Войти через
                    Google</Button>
            </div>
        </Form>
    )
}
//
// config    :{transitional: {…},
//     adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
// data    :    ""
// headers    :    AxiosHeaders {content-length: '0'}
// request    :    XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
// status    :    201
// statusText    :    ""

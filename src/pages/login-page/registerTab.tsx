import {Button, Form, Input} from 'antd';
import google from '../../assets/svg/google.svg';
import {useState} from 'react';
import {Rule} from 'antd/lib/form';
import {useAppDispatch} from '@redux/configure-store.ts';
import {RegisterType} from '../../api/apiTypes.ts';
import {singUp} from '@redux/reducers/auth-reducer.ts';
import {useForm} from 'antd/lib/form/Form';


export const RegisterTab = () => {

    const dispatch = useAppDispatch()
    const [form] = useForm();
    const [errors, setError] = useState<string[]>([])


    const handleButtonClick = () => {
        form.validateFields()
            .then()
            .catch(err => console.log(err));
    };
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

    const validateEmail: Rule = () => ({
        validator(_: any, value: string) {
            return new Promise((resolve, reject) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && emailRegex.test(value)) {
                    setError(errors.filter(err => err !== 'email'))
                    resolve('');
                }
                if (!value && !focus || !emailRegex.test(value) && !focus) {
                    !errors.includes('email') && setError([...errors, 'email'])
                    reject(new Error(''))
                }

            });
        },
    });
    const validateMatchPassword: Rule = ({getFieldValue}) => ({
        validator(_: any, value: string) {
            console.log(value)
            return new Promise((resolve, reject) => {
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                if (value && getFieldValue('password') === value) {
                    setError(errors.filter(err => err !== 'match'))
                    resolve('');
                }
                if (!value && !focus || !passwordRegex.test(value)) {
                    !errors.includes('match') && setError([...errors, 'match'])
                    reject(new Error(''))
                }

            });
        },
    });


    const finish = (value: RegisterType) => {
        const {email, password} = value

        dispatch(singUp({email, password}))
    }


    return (
        <Form form={form} onFinish={values => finish(values)}
              className={'loginPage_registerFormWrapper'}>
            <Form.Item

                name={'email'}
                validateTrigger={['onBlur', 'onChange']}
                rules={[validateEmail]}
            >
                <Input
                    data-test-id='registration-email'
                    addonBefore={'e-mail:'}
                    className={'loginPage_inputItem'}

                />
            </Form.Item>
            <Form.Item
                name={'password'}
                help={false}
                extra={<span
                    className={`loginPage_extra ${errors.includes('password') && 'loginPage_extraError'}`}>Пароль не менее 8 символов, с заглавной буквой и цифрой</span>
                }
                validateTrigger={['onBlur', 'onChange']}
                className={'loginPage_inputItem'}
                rules={[
                    validatePassword

                ]}
            >
                <Input.Password
                    data-test-id='registration-password'
                    placeholder={'Пароль'}

                />
            </Form.Item>


            <Form.Item name={'match'} className={'loginPage_inputItem'}
                       extra={errors.includes('match') && <span
                           className={`loginPage_extra loginPage_extraError`}>Пароли не совпадают</span>}
                       rules={[
                           validateMatchPassword
                       ]}
            >
                <Input.Password
                    data-test-id='registration-confirm-password'
                    placeholder={'Повторите пароль'}
                />
            </Form.Item>

            <div className={'loginPage_buttonsWrapper'}>
                <Button
                    data-test-id='registration-submit-button'
                    type={'primary'} htmlType={'submit'} onClick={handleButtonClick}
                    disabled={errors.length !== 0}>
                    Зарегестрироваться
                </Button>
                <Button type={'default'}><img src={google} alt={'google'}/>
                    Регистрация через Google
                </Button>

            </div>
        </Form>
    )
}

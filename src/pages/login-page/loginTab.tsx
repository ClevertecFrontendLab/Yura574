import {Button, Checkbox, Form, Input} from 'antd';
import google from '../../assets/svg/google.svg';
import {useState} from 'react';
import {Rule} from 'antd/lib/form';


export const LoginTab = () => {
    const [form] = Form.useForm();
    const [errors, setError] = useState<string[]>([])
    const [focus, setFocus] = useState(false)
    const handleBlur = () => {
        setFocus(false)
    };
    const handleFocus = () => {
        setFocus(true)
    };

    console.log(errors)
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
                    setError(errors.filter(err => err !=='password'))
                    resolve('');
                }
                if (!value && !focus || !passwordRegex.test(value) && !focus) {
                    !errors.includes('password') &&  setError([...errors, 'password'])
                    reject(new Error(''))
                }
            });
        },
    });
    const validateEmail: Rule = () => ({
        validator(_: any, value: string) {
            return new Promise((resolve, reject) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && emailRegex.test(value)) {
                    setError(errors.filter(err => err !=='email'))
                    resolve('');
                }
                if (!value && !focus || !emailRegex.test(value) && !focus) {
                   !errors.includes('email') && setError([...errors, 'email'])
                    reject(new Error(''))
                }

            });
        },
    });

    return (
        <Form form={form} className={'loginPage_registerFormWrapper'}>
            <Form.Item
                name={'email'}
                validateTrigger={['onBlur', 'onChange']}
                rules={[validateEmail]}
            >
                <Input
                    addonBefore={'e-mail:'}
                    className={'loginPage_inputItem'}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                />
            </Form.Item>
            <Form.Item
                name={'password'}
                extra={<span className={` loginPage_extra ${errors.includes('password') && 'loginPage_extraError'}`}>Пароль не менее 8 латинских букв с заглавной и цифрой</span>}
                validateTrigger={['onBlur', 'onChange']}
                className={'loginPage_inputItem'}
                rules={[validatePassword]}

            >
                <Input.Password placeholder={'Пароль'}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                />
            </Form.Item>

            <div className={'loginPage_checkArea '}>
                <Checkbox> Запомнить меня</Checkbox>
                <div className={'body_regular_16'}>Забыли пароль?</div>
            </div>
            <div className={'loginPage_buttonsWrapper'}>
                <Button type={'primary'} onClick={handleButtonClick} disabled={errors.length !== 0}>Вход</Button>
                <Button type={'default'}><img src={google} alt={'google'}/>Войти через
                    Google</Button>
            </div>
        </Form>
    )
}

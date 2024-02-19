import {Button,  Form, Input} from 'antd';
import google from '../../assets/svg/google.svg';
import  {useState} from 'react';
import {Rule} from 'antd/lib/form';
import {useAppDispatch} from '@redux/configure-store.ts';
import {LoginType} from '../../api/apiTypes.ts';
import {singUp} from '@redux/reducers/auth-reducer.ts';


export const RegisterTab = () => {

    const dispatch = useAppDispatch()
    const [form] = Form.useForm();
    const [errors, setError] = useState<string[]>([])
    const [focus, setFocus] = useState(false)
    const handleBlur = () => {
        setFocus(false)
    };

    const handleFocus = () => {
        setFocus(true)
    };

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
                    setError(errors.filter(err => err !== 'password'))
                    resolve('');
                }
                if (!value && !focus || !passwordRegex.test(value) && !focus) {
                    !errors.includes('password') && setError([...errors, 'password'])
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
            return new Promise((resolve, reject) => {
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                if (value && getFieldValue('password') === value) {
                    setError(errors.filter(err => err !== 'password match'))
                    resolve('');
                }
                if (!value && !focus || !passwordRegex.test(value) && !focus) {
                    !errors.includes('password match') && setError([...errors, 'password match'])
                    reject(new Error(''))
                }

            });
        },
    });

        const finish = (value: LoginType) => {
            const {email, password} = value
            console.log(value)
            dispatch(singUp({email, password}))
        }



    return (
        <Form form={form} onFinish={values=> finish(values)} className={'loginPage_registerFormWrapper'}>
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
                extra={<span
                    className={` loginPage_extra ${errors.includes('password') && 'loginPage_extraError'}`}>Пароль не менее 8 латинских букв с заглавной и цифрой</span>}
                validateTrigger={['onBlur', 'onChange']}
                className={'loginPage_inputItem'}
                rules={[validatePassword]}

            >
                <Input.Password placeholder={'Пароль'}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                />
            </Form.Item>


            <Form.Item name={'password match'} className={'loginPage_inputItem'}
                       extra={errors.includes('password match') && <span
                           className={`loginPage_extra loginPage_extraError`}>Пароли не совпадают</span>}
                       rules={[
                           validateMatchPassword
                       ]}
            >
                <Input.Password placeholder={'Повторите пароль'}
                />
            </Form.Item>

            <div className={'loginPage_buttonsWrapper'}>
                <Button type={'primary'} htmlType={'submit'} onClick={handleButtonClick}
                        disabled={errors.length !== 0}>
                    Зарегестрироваться
                </Button>
                <Button type={'default'} ><img src={google} alt={'google'}/>
                    Регистрация через Google
                </Button>
            </div>
        </Form>
    )
}

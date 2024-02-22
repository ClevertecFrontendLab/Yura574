import {Button, Form, Input} from 'antd';
import {Rule} from 'antd/lib/form';
import { useState} from 'react';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {useForm} from 'antd/lib/form/Form';
import {changePassword} from '@redux/reducers/auth/changePassword-reducer.ts';
import {ChangePasswordType} from '../../../api/apiTypes.ts';

export const ChangePassword = () => {
    const dispatch = useAppDispatch()
    const email  = useAppSelector(state => state.common.email)
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

    const validateMatchPassword: Rule = ({getFieldValue}) => ({
        validator(_: any, value: string) {
            return new Promise((resolve, reject) => {
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
                if (value && getFieldValue('password') === value) {
                    setError(errors.filter(err => err !== 'match'))
                    resolve('');
                }
                if (!value || !passwordRegex.test(value)) {
                    !errors.includes('match') && setError([...errors, 'match'])
                    reject(new Error(''))
                }

            });
        },
    });

    const finish = (value:ChangePasswordType) => {
        const {password, confirmPassword} = value
        console.log(value)
        dispatch(changePassword({password,confirmPassword,email}))
    }

    return (
        <div className={'loginPage_loginFieldWrapper'}>
        <Form form={form} onFinish={values => finish(values)}
              className={'loginPage_registerFormWrapper'}>

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


            <Form.Item name={'confirmPassword'} className={'loginPage_inputItem'}
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
                   Сохранить
                </Button>


            </div>
        </Form>
        </div>
    )
}

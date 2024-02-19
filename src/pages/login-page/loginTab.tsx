import {Button, Checkbox, Form, Input} from 'antd';
import google from '../../assets/svg/google.svg';
import {useAppDispatch} from '@redux/configure-store.ts';
import {singIn} from '@redux/reducers/auth-reducer.ts';
import {LoginType} from '../../api/apiTypes.ts';

export const LoginTab = () => {
    const dispatch = useAppDispatch()
    const [form] = Form.useForm();

    const handleButtonClick = () => {
        form.validateFields()
            .then()
            .catch(err => console.log(err));
    };

    const finish = (value: LoginType) => {
        const {email, password} = value
        dispatch(singIn({email, password}))
    }

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
                }]}

            >
                <Input.Password placeholder={'Пароль'}
                />
            </Form.Item>

            <div className={'loginPage_checkArea '}>
                <Checkbox> Запомнить меня</Checkbox>
                <div className={'body_regular_16'}>Забыли пароль?</div>
            </div>
            <div className={'loginPage_buttonsWrapper'}>
                <Button type={'primary'} htmlType={'submit'}
                        onClick={handleButtonClick}>Вход</Button>
                <Button type={'default'}><img src={google} alt={'google'}/>Войти через
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

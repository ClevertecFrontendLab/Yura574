import {Button, Checkbox, Form, Input} from 'antd';
import google from '../../assets/svg/google.svg';

export const LoginTab = () => {
    return (
        <Form className={'loginPage_registerFormWrapper'}>
            <Form.Item>
                <Input addonBefore={'e-mail:'} className={'loginPage_inputItem'}/>
            </Form.Item>

            <Form.Item className={'loginPage_inputItem'}>
                <Input.Password placeholder={'Повторите пароль'}
                />
            </Form.Item>
            <div className={'loginPage_checkArea '}>
                <Checkbox> Запомнить меня</Checkbox>
                <div className={'body_regular_16'}>Забыли пароль?</div>
            </div>
            <div className={'loginPage_buttonsWrapper'}>
                <Button type={'primary'}>Вход</Button>
                <Button type={'default'}><img src={google} alt={'google'}/>Войти через
                    Google</Button>
            </div>
        </Form>
    )
}

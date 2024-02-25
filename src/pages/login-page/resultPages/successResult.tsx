import success from '../../../assets/svg/success.svg';
import {Button, Result} from 'antd';
import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {pathName} from '../../../routers/routers.tsx';

export const SuccessResult = () => {
    const dispatch = useAppDispatch()


    const handleButton = () => {
        dispatch(push(`${pathName.auth}/${pathName.singIn}`))
        dispatch(deleteError())
    }
    return (
        <Result
            status={'success'}
            title='Регестрация успешна'
            subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            className={'loginPage_loginFieldWrapper'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary loginPage_button100'}
                    onClick={handleButton}
                    data-test-id='registration-enter-button'>
                    Войти
                </Button>,
            ]}
        />
    )
}

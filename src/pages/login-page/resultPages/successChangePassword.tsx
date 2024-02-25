import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import success from '../../../assets/svg/success.svg';
import {Button, Result} from 'antd';


export const SuccessChangePassword = () => {
    const dispatch = useAppDispatch()


    const handleButton = () => {
        dispatch(push(`${pathName.auth}/${pathName.singIn}`))
        dispatch(deleteError())
    }
    return (
        <Result
            status={'success'}
            title="Пароль успешно изменен"
            subTitle="Теперь можно войти в аккаунт, используя свой логин и новый пароль"
            className={'loginPage_loginFieldWrapper loginPage_resultRecoveryPassword'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary loginPage_button100'}
                    onClick={handleButton}
                    data-test-id='change-entry-button'>
                    Вход
                </Button>,
            ]}
        />
    )
}

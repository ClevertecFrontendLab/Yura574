import error from '../../../assets/svg/error.svg';
import {Button, Result} from 'antd';
import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';


export const ErrorCheckEmailNoExist = () => {
    const dispatch = useAppDispatch()
    const handleButton = ()=> {
        dispatch(push(`${pathName.auth}/${pathName.singIn}`))
    }
    return (
        <Result
            status={'error'}
            title="Такой e-mail не зарегистрирован"
            subTitle="Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail."
            className={'loginPage_loginFieldWrapper loginPage_resultRecoveryPassword'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary '}
                    onClick={handleButton}
                    data-test-id='check-retry-button'>
                    Попробовать снова
                </Button>,
            ]}
        />
    )
};

import {useAppDispatch} from '@redux/configure-store.ts';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import warning from '../../../assets/svg/warning.svg';
import {Button, Result} from 'antd';
import {pathName} from '../../../routers/routers.tsx';


export const ErrorLogin = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    useEffect(() => {
        if (!location.state) {
            dispatch(push(`${pathName.auth}/${pathName.singIn}`))
        }
    }, [location, dispatch]);


    const handleButton = () => {
        dispatch(push('/auth/singIn'))
        dispatch(deleteError())
    }
    return (
        <Result
            status={'warning'}
            title="Вход не выполнен"
            subTitle="Что-то пошло не так. Попробуйте еще раз"
            className={'loginPage_loginFieldWrapper'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary loginPage_button100'}
                    onClick={handleButton}
                    data-test-id='login-retry-button'>
                    Повторить
                </Button>,
            ]}
        />
    )
}

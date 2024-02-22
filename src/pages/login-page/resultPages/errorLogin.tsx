import {useAppDispatch} from '@redux/configure-store.ts';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import warning from '../../../assets/svg/warning.svg';
import {Button} from 'antd';
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
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={ warning } alt=""/></div>
            <div>Вход не выполнен</div>
            <div>Что-то пошло не так. Попробуйте еще раз</div>
            <Button
                data-test-id='login-retry-button'
                onClick={handleButton}>
                Повторить
            </Button>
        </div>
    )
}

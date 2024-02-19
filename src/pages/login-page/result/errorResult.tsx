import error from '../../../assets/svg/error.svg';
import {Button} from 'antd';
import {Navigate, useLocation} from 'react-router-dom';
import {push} from 'redux-first-history';
import {DataErrorType, deleteError} from '@redux/reducers/common-reducer.ts';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {useEffect} from 'react';

export const ErrorResult = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    // const isResult = useAppSelector(state => state.common.isResult)
    // const dataError = useAppSelector(state => state.common.dataError)
    // const errorMessage = {
    //     400: 'Ошибка в запросе',
    //     429: 'Превышено максимальное количество запросов в минуту. Разрешено отправлять не более 200 запросов в минуту с одного ip',
    //     500: 'Ошибка сервера'
    //
    // }
    // const title = errorMessage[dataError?.statusCode as keyof typeof errorMessage];
    //
    // if (!isResult) {
    //     return <Navigate to={'/login'}/>
    // }
    useEffect(() => {
        if (!location.state) {
            console.log(location)
            dispatch(push('/login'))
        }
    }, [location, dispatch]);
    const handleButton = () => {
        dispatch(push('/login'))
        dispatch(deleteError())
    }
    return (
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={error} alt=""/></div>
            <div>{'title'}</div>
            <div>{'dataError?.errorMessage'}
            </div>
            <Button onClick={handleButton}>Назад к регистрации</Button>
        </div>
    )
}

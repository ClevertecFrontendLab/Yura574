import {useAppDispatch} from '@redux/configure-store.ts';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import error from '../../../assets/svg/error.svg';
import {Button} from 'antd';
import {pathName} from '../../../routers/routers.tsx';


export const ErrorUserExist = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    useEffect(() => {
        if (!location.state) {
            dispatch(push('/auth/singUp'))
        }
    }, [location, dispatch]);


    const handleButton = () => {
        dispatch(push(`${pathName.auth}/${pathName.singUp}`))
        dispatch(deleteError())
    }
    return (
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={error} alt=""/></div>
            <div>Данные не сохранились</div>
            <div>Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому
                e-mail.
            </div>
            <Button
                data-test-id='registration-back-button'
                onClick={handleButton}>
                Назад к регестрации
            </Button>
        </div>
    )
}

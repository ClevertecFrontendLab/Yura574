import error from '../../../assets/svg/error.svg';
import {Button} from 'antd';
import {useLocation} from 'react-router-dom';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {useAppDispatch} from '@redux/configure-store.ts';
import {useEffect} from 'react';
import {pathName} from '../../../routers/routers.tsx';

export const ErrorResult = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()


    useEffect(() => {
        if (!location.state) {
            dispatch(push(`${pathName.auth}/${pathName.singUp}`))
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
            <div>Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.
            </div>
            <Button
                data-test-id='registration-retry-button'
                onClick={handleButton}>
                Повторить
            </Button>
        </div>
    )
};

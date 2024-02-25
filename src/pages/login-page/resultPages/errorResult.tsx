import error from '../../../assets/svg/error.svg';
import {Button, Result} from 'antd';
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
        <Result
            status={'error'}
            title="Данные не сохранились"
            subTitle="Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз."
            className={'loginPage_loginFieldWrapper'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary loginPage_button100'}
                    onClick={handleButton}
                    data-test-id='registration-retry-button'>
                    Назад к регестрации
                </Button>,
            ]}
            />
    )
};

import {Button, Result} from 'antd';
import {useLocation} from 'react-router-dom';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {useAppDispatch} from '@redux/configure-store.ts';
import {useEffect} from 'react';
import {path} from '../../../routers/routers.tsx';

export const ErrorResult = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()

    useEffect(() => {
        if (!location.state) {
            dispatch(push(`${path.registration}`))
        }
    }, [location, dispatch]);

    const handleButton = () => {
        dispatch(push(`${path.registration}`))
        dispatch(deleteError())
    }

    return (
        <Result
            status={'error'}
            title="Данные не сохранились"
            subTitle="Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз."
            className={'result_errorResult_wrapper'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary'}
                    onClick={handleButton}
                    data-test-id='registration-retry-button'>
                    Назад к регестрации
                </Button>,
            ]}
        />
    )
};

import {useAppDispatch} from '@redux/configure-store.ts';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import error from '../../../assets/svg/error.svg';
import {Button, Result} from 'antd';
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
        <Result
            status={'error'}
            title="Данные не сохранились"
            subTitle="Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail."
            className={'loginPage_loginFieldWrapper'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary loginPage_button100'}
                    onClick={handleButton}
                    data-test-id='registration-back-button'>
                    Назад к регестрации
                </Button>,
            ]}
        />

    )
}

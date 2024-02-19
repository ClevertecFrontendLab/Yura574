import success from '../../../assets/svg/success.svg';
import {Button} from 'antd';
import {useLocation} from 'react-router-dom';
import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {useEffect} from 'react';

export const SuccessResult =()=> {
    const dispatch = useAppDispatch()

    const location = useLocation();
    // useEffect(() => {
    //     if (!location.state) {
    //         console.log(location)
    //         dispatch(push('/login'))
    //     }
    // }, [location, dispatch]);

    const handleButton = () => {
        dispatch(push('/login'))
        dispatch(deleteError())
    }
    return (
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={success } alt=""/></div>
            <div>Данные не сохранились</div>
            <div>Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по
                другому e-mail.
            </div>
            <Button onClick={handleButton}>Назад к регистрации</Button>
        </div>
    )
}

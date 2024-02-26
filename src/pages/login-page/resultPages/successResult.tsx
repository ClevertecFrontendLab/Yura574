import {Button, Result} from 'antd';
import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {pathName} from '../../../routers/routers.tsx';
import {useEffect, useState} from 'react';

export const SuccessResult = () => {
    const dispatch = useAppDispatch()



    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    const handleButton = () => {
        dispatch(push(`${pathName.auth}/${pathName.singIn}`))
        dispatch(deleteError())
    }
    return (
        <Result
            status={'success'}
            title='Регестрация успешна'
            subTitle={<div>Регистрация прошла успешно. Зайдите {windowWidth> 360 && <br/>} в приложение, используя свои e-mail и пароль.</div>}
            className={'result_successResult__wrapper'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary'}
                    onClick={handleButton}
                    data-test-id='registration-enter-button'>
                    Войти
                </Button>,
            ]}
        />
    )
}

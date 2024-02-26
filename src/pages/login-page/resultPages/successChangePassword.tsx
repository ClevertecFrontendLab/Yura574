import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {Button, Result} from 'antd';
import {useEffect, useState} from 'react';


export const SuccessChangePassword = () => {
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
            title={<div>Пароль успешно {windowWidth <=360 && <br/>} изменен</div>}
            subTitle={<div>Теперь можно войти в аккаунт, используя <br/> свой логин и новый пароль</div>}
            className={'result_successChangePassword_wrapper'}
            extra={[
                <Button
                    size={'large'}
                    type="primary"
                    className={'loginPage_buttonPrimary loginPage_button100'}
                    onClick={handleButton}
                    data-test-id='change-entry-button'>
                    Вход
                </Button>,
            ]}
        />
    )
}

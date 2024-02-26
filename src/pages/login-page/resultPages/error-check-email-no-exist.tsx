import {Button, Result} from 'antd';
import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';
import {useEffect, useState} from 'react';


export const ErrorCheckEmailNoExist = () => {
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
    const handleButton = ()=> {
        dispatch(push(`${pathName.auth}/${pathName.singIn}`))
    }
    return (
        <Result
            status={'error'}
            title="Такой e-mail не зарегистрирован"
            subTitle={<div>Мы не нашли в базе вашего e-mail. Попробуйте {windowWidth > 360? <br/> : ''} войти с другим e-mail.</div>}
            className={'result_errorCheckEmailNoExist_wrapper'}
            extra={[
                <Button
                    size={'large'}
                    type="primary"
                    className={'loginPage_buttonPrimary '}
                    onClick={handleButton}
                    data-test-id='check-retry-button'>
                    Попробовать снова
                </Button>,
            ]}
        />
    )
};

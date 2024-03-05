import {Button, Result} from 'antd';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {path} from '../../../routers/routers.tsx';


export const ErrorCheckEmailNoExist = () => {
    const dispatch = useAppDispatch()
    const windowWidth = useAppSelector(state => state.common.windowWidth)

    const handleButton = ()=> {
        dispatch(push(`${path.login}`))
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

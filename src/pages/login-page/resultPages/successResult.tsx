import {Button, Result} from 'antd';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {path} from '../../../routers/routers.tsx';

export const SuccessResult = () => {
    const dispatch = useAppDispatch()
    const windowWidth = useAppSelector(state => state.common.windowWidth)


    const handleButton = () => {
        dispatch(push(`${path.login}`))
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

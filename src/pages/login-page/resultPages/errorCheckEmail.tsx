import {Button, Result} from 'antd';
import {push} from 'redux-first-history';
import {path} from '../../../routers/routers.tsx';
import {useAppDispatch} from '@redux/configure-store.ts';


export const ErrorCheckEmail = () => {

    const dispatch = useAppDispatch()
    const handleButton = () => {
        dispatch(push(`${path.login}`))
    }

    return (
        <Result
            status={'500'}
            title="Что-то пошло не так"
            subTitle="Произошла ошибка, попробуйте отправить форму ещё раз."
            className={'result_errorCheckEmail_wrapper'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary'}
                    onClick={handleButton}
                    data-test-id='check-back-button'>
                    Назад
                </Button>,
            ]}
        />
    )
}

import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {path} from '../../../routers/routers.tsx';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {Button, Result} from 'antd';


export const SuccessChangePassword = () => {
    const dispatch = useAppDispatch()
    const windowWidth = useAppSelector(state => state.common.windowWidth)


    const handleButton = () => {
        dispatch(push(`${path.login}`))
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

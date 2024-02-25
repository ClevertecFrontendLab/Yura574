import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import error from '../../../assets/svg/error.svg';
import {Button, Result} from 'antd';


export const ErrorChangePassword = () => {
    const dispatch = useAppDispatch()
    const previousLocation = useAppSelector(state => state.router.previousLocations)
   const location = previousLocation &&previousLocation[1] &&previousLocation[1].location?.pathname

    const handleButton = () => {
        if(location){
            dispatch(push(location))
        }
        //
        dispatch(deleteError())
    }
    return (
        <Result
            status={'error'}
            title="Данные не сохранились"
            subTitle="Что-то пошло не так. Попробуйте ещё раз"
            className={'loginPage_loginFieldWrapper loginPage_resultRecoveryPassword'}
            extra={[
                <Button
                    type="primary"
                    className={'loginPage_buttonPrimary loginPage_button100'}
                    onClick={handleButton}
                    data-test-id='change-retry-button'>
                   Повторить
                </Button>,
            ]}
        />
    )
}

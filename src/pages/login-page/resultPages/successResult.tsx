import success from '../../../assets/svg/success.svg';
import {Button} from 'antd';
import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {deleteError} from '@redux/reducers/common-reducer.ts';
import {pathName} from '../../../routers/routers.tsx';

export const SuccessResult = () => {
    const dispatch = useAppDispatch()


    const handleButton = () => {
        dispatch(push(pathName.auth))
        dispatch(deleteError())
    }
    return (
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={success} alt=""/></div>
            <div>Данные не сохранились</div>
            <div>Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по
                другому e-mail.
            </div>
            <Button
                data-test-id='registration-enter-button'
                onClick={handleButton}>Назад к регистрации
            </Button>
        </div>
    )
}

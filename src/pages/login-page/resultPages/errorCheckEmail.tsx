import somethingWasWrong from '../../../assets/svg/somethingWasWrong.svg';
import {Button} from 'antd';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';
import {useAppDispatch} from '@redux/configure-store.ts';


export const ErrorCheckEmail = () => {

    const dispatch = useAppDispatch()
    const buttonHandler = ()=> {

        dispatch(push(`${pathName.auth}/${pathName.singIn}`))

    }
    return (
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={somethingWasWrong} alt=""/></div>
            <h2>Что-то пошло не так</h2>
            <div>Произошла ошибка, попробуйте отправить форму ещё раз.</div>
            <Button
                data-test-id='registration-enter-button'
                onClick={buttonHandler}
            >Назад
            </Button>
        </div>
    )
}

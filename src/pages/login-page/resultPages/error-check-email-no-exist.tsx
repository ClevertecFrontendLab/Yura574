import error from '../../../assets/svg/error.svg';
import {Button} from 'antd';
import {useAppDispatch} from '@redux/configure-store.ts';
import {push} from 'redux-first-history';
import {pathName} from '../../../routers/routers.tsx';


export const ErrorCheckEmailNoExist = () => {
    const dispatch = useAppDispatch()
    const buttonHandler = ()=> {
        dispatch(push(`${pathName.auth}/${pathName.singIn}`))
    }
    return (
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={error} alt=""/></div>
            <h2>Такой e-mail не зарегистрирован</h2>
            <div>Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.
            </div>
            <Button
                data-test-id='registration-enter-button'
                onClick={buttonHandler}
            >Попробовать снова
            </Button>
        </div>
    )
};

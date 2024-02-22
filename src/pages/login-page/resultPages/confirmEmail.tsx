import result from '../../../assets/svg/result.svg';
import errorSvg from '../../../assets/svg/error.svg';
import VerificationInput from 'react-verification-input';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {confirmEmail, setError} from '@redux/reducers/auth/checkEmail-reducer.ts';
import {useState} from 'react';


export const ConfirmEmail = () => {
    const dispatch = useAppDispatch()
    const email = useAppSelector(state => state.common.email)
    const error = useAppSelector(state => state.checkEmail.error)
    const [code, setCode] = useState<string>('')
    const completeHandler = (value: string) => {
        console.log(value)
        dispatch(confirmEmail({email, code: value}))
        setCode('')
    }
    console.log(email)
    return (
        <div className={'loginPage_loginFieldWrapper'}>
            <div><img src={error? errorSvg:result } alt=""/></div>
            <h2>{error
                ? 'Неверный код. Введите код  для восстановления аккауанта'
                : 'Введите код для восстановления аккауанта'
            }</h2>
            <div>Мы отправили вам на e-mail victorbyden@gmail.com шестизначный код. Введите его в
                поле ниже.
            </div>
            <VerificationInput
                placeholder={''}
                value={code}
                onChange={e => {
                    setCode(e)
                    error && dispatch(setError(false))
                }}

                inputProps={{inputMode: 'numeric'}}
                validChars={'0-9'}
                onComplete={completeHandler}
                classNames={{
                    container: "container",
                    character: `character ${error && 'characterError'}`,
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                    characterFilled: "",
                }}/>
            <div>Не пришло письмо? Проверьте папку Спам.</div>

        </div>
    )
}

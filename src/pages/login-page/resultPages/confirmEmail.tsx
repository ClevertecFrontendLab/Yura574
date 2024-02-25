import result from '../../../assets/svg/result.svg';
import errorSvg from '../../../assets/svg/error.svg';
import VerificationInput from 'react-verification-input';
import {useAppDispatch, useAppSelector} from '@redux/configure-store.ts';
import {confirmEmail, setError} from '@redux/reducers/auth/checkEmail-reducer.ts';
import {useEffect, useState} from 'react';
import {Button, Result} from 'antd';
import {changePassword} from '@redux/reducers/auth/changePassword-reducer.ts';
import {pathName} from '../../../routers/routers.tsx';


export const ConfirmEmail = () => {
    const dispatch = useAppDispatch()
    const email = sessionStorage.getItem('email')
    const error = useAppSelector(state => state.checkEmail.error)
    const [code, setCode] = useState<string>('')
    const completeHandler = (value: string) => {
        dispatch(confirmEmail({email, code: value}))

        setCode('')
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);



    const previousLocation = useAppSelector(state => state.router.previousLocations)
    const location = previousLocation &&previousLocation[1] &&previousLocation[1].location?.pathname
    useEffect(() => {
        if(location === `${pathName.auth}/${pathName.singIn}`){
         dispatch(setError(null))

        }
    }, [previousLocation, dispatch]);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <Result
            status={'info'}
            title={error
                ? 'Неверный код. Введите код для восстановления аккауанта'
                : <div>Введите код <br/> для восстановления аккауанта</div>
            }
            subTitle={<div>Мы отправили вам на e-mail <b>{email}</b>{windowWidth<=360 && <br/>} шестизначный код. Введите его в
                поле{windowWidth<=360 && <br/>} ниже.</div>}
            className={'loginPage_loginFieldWrapper loginPage_resultRecoveryPassword'}
            extra={[<div>
                <div data-test-id='verification-input'>
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
                        }}/></div>
                <div className={'loginPage_spam'}>
                    Не пришло письмо? Проверьте {windowWidth<=360 && <br/>} папку Спам.
                </div>
            </div>
            ]}
        />
    )
}

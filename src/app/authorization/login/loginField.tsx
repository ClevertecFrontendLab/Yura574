/* eslint-disable */
import nextStep from '../../../assets/svg/next-step.svg'
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {
    loginTC,
} from '../../../store/reducers/auth-reducer';
import {Navigate, NavLink} from 'react-router-dom';

export const LoginField = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const error = useAppSelector(state => state.app.error?.error.message)

    const {handleSubmit, register, formState: {errors}, watch, reset} = useForm({
        mode: 'onBlur',
        defaultValues: {
            login: '',
            password: ''
        }

    })

    const onSubmit = (login: string, password: string) => {
        console.log({identifier: login, password})
        dispatch(loginTC({identifier: login, password}))
        reset()
    }
    console.log(errors)
    if (isAuth) {
        return <Navigate to={'/'}/>
    }
    return (
        <div className="registrationField">
            <div>
                <div className="registrationField-title">Вход в личный кабинет</div>
            </div>
            <div className="registrationField-input-container">
                <form onSubmit={handleSubmit((data) => onSubmit(data.login, data.password))}>
                    <div className="registrationField-form_input">
                        <input type="text"
                               id="registration-login"
                               {...register('login',
                                   {required: 'email is required'}
                               )}
                               className={error ? 'registrationField-input registrationField-input-error' : 'registrationField-input'}
                        />
                        <label htmlFor="registration-login"
                               className={watch('login') !== ''
                                   ? 'registrationField-input-label filledInput'
                                   : 'registrationField-input-label'}
                        >
                            Логин
                        </label>

                    </div>
                    <div className={errors ? 'registrationField-input-prompt' : ''}>
                        {errors.login?.message}
                    </div>

                    <div
                        className="registrationField-form_input registrationField-form_input-password">
                        <input
                            type="password"
                            {...register('password',
                                {
                                    required: 'this field is required',
                                    // minLength: {value: 8, message: 'Пароль не менее 8 символов'}
                                }
                            )}
                            id="registration-password"
                            className={error ? 'registrationField-input registrationField-input-error' : 'registrationField-input'}

                        />
                        <label htmlFor="registration-password"
                               className={watch('password') !== ''
                                   ? 'registrationField-input-label filledInput'
                                   : 'registrationField-input-label'}>
                            Пароль
                        </label>
                        <div>{errors.password?.message}</div>
                    </div>
                    {error
                        ? <div className="registrationField-input-prompt">
                            <div className="forgot-password forgot-password-error">{error}</div>
                            <div className="recovery">Востановить?</div>
                        </div>
                        : <div className="registrationField-input-prompt forgot-password">
                            Забыли логин или пароль?
                        </div>}

                    <button type="submit" className="authorization-next_step"> Вход</button>

                </form>
            </div>
            <div className="authorization-account_exist">
                <span>Нет учетной записи?</span>
                <NavLink to={'/authorization/registry'}>
                    <button><span className="isExist">Регистрация</span> <img src={nextStep}
                                                                              alt="next-step"/>
                    </button>
                </NavLink>
            </div>

        </div>
    )
}

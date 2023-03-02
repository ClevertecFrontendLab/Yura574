/* eslint-disable */
import nextStep from '../../../assets/svg/next-step.svg'
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../store/store';
import {
    loginTC,
    setRegistryDataLoginPassword
} from '../../../store/reducers/auth-reducer';

export const LoginField = () => {
    const dispatch = useAppDispatch()
    const {handleSubmit, register, formState: {errors,}} = useForm({
        defaultValues: {
            login: '',
            password: ''
        }

    })

    const onSubmit = (login: string, password: string) => {
        dispatch(loginTC({identifier: login, password}))
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
                               {...register('login', {required: 'email is required'})}
                               className="registrationField-input"
                        />
                        <label htmlFor="registration-login"
                               className="registrationField-input-label filledInput"
                        >
                           Логин
                        </label>
                        <div className="registrationField-input-prompt">
                            {errors.login?.message}
                        </div>
                    </div>

                    <div
                        className="registrationField-form_input registrationField-form_input-password">
                        <input
                            type="password"
                            {...register('password', {required: 'this field is required'})}
                            id="registration-password"
                            className="registrationField-input"

                        />
                        <label htmlFor="registration-password"
                               className="registrationField-input-label filledInput">
                            Пароль
                        </label>
                        {errors.password?.message}
                        <div className="registrationField-input-prompt">
                          Забыли логин или пароль?
                        </div>
                    </div>

                    <button type="submit" className="authorization-next_step"> следующий шаг
                    </button>

                </form>
            </div>
            <div className="authorization-account_exist">
                <span>Есть учетная запись?</span>
                <button><span>Войти</span> <img src={nextStep} alt="next-step"/></button>
            </div>

        </div>
    )
}

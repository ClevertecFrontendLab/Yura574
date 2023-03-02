/* eslint-disable */
import nextStep from '../../../assets/svg/next-step.svg'
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../store/store';
import {
    setRegistryDataLoginPassword
} from '../../../store/reducers/auth-reducer';

export const RegistrationField_step1 = () => {
    const dispatch = useAppDispatch()
    const {handleSubmit, register, formState: {errors,}} = useForm({
        defaultValues: {
            login: '',
            password: ''
        }

    })

    const onSubmit = (login: string, password: string, registryStep: number) => {
        dispatch(setRegistryDataLoginPassword({login, password, registryStep}))
    }


    console.log(errors)
    return (
        <div className="registrationField">
            <div>
                <div className="registrationField-title">Регистрация</div>
                <div className="registrationField-step">1 шаг из 3</div>
            </div>
            <div className="registrationField-input-container">
                <form onSubmit={handleSubmit((data) => onSubmit(data.login, data.password, 2))}>
                    <div className="registrationField-form_input">
                        <input type="text"
                               id="registration-login"
                               {...register('login', {required: 'email is required'})}
                               className="registrationField-input"
                        />
                        <label htmlFor="registration-login"
                               className="registrationField-input-label filledInput"
                        >
                            Придумайте логин для входа
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
                            пароль
                        </label>
                        {errors.password?.message}
                        <div className="registrationField-input-prompt">
                            Пароль не менее 8 символов, с заглавной буквой и цифрой
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

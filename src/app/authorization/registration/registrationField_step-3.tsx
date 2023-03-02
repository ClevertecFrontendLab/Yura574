/* eslint-disable */
import nextStep from '../../../assets/svg/next-step.svg'
import {useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {
    registryUserTC,
    setRegistryDataEmailPhone,
} from '../../../store/reducers/auth-reducer';

export const RegistrationField_step3 = () => {
    const dispatch = useAppDispatch()
    const {handleSubmit, register, formState: {errors,}} = useForm({
        defaultValues: {
            email: '',
            phone: ''
        }

    })


    const onSubmit = (email: string, phone: string) => {
        dispatch(setRegistryDataEmailPhone({email, phone}))
        dispatch(registryUserTC())
    }
    console.log(errors)
    return (
        <div className="registrationField">
            <div>
                <div className="registrationField-title">Регистрация</div>
                <div className="registrationField-step">3 шаг из 3</div>
            </div>
            <div className="registrationField-input-container">
                <form onSubmit={handleSubmit((data) => onSubmit(data.email, data.phone))}>
                    <div className="registrationField-form_input">
                        <input type="text"
                               id="registration-login"
                               {...register('phone', {required: 'phone is required'})}
                               className="registrationField-input"
                        />
                        <label htmlFor="registration-login"
                               className="registrationField-input-label filledInput"
                        >
                           Номер телефона
                        </label>
                        <div className="registrationField-input-prompt">
                            {errors.phone?.message}
                        </div>
                    </div>

                    <div
                        className="registrationField-form_input registrationField-form_input-password">
                        <input
                            type="email"
                            {...register('email', {required: 'this field is required'})}
                            id="registration-password"
                            className="registrationField-input"

                        />
                        <label htmlFor="registration-password"
                               className="registrationField-input-label filledInput">
                            E-mail
                        </label>
                        {errors.email?.message}

                    </div>

                    <button type="submit" className="authorization-next_step"> Зарегистрироваться
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

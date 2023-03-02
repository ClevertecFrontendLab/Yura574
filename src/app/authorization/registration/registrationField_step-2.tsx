/* eslint-disable */
import nextStep from '../../../assets/svg/next-step.svg'
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../../store/store';
import {
    setRegistryDataName
} from '../../../store/reducers/auth-reducer';

export const RegistrationField_step2 = () => {
    const dispatch = useAppDispatch()
    const {handleSubmit, register, formState: {errors,}} = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }

    })

    const onSubmit = (firstName: string, lastName: string, registryStep: number) => {
        dispatch(setRegistryDataName({firstName, lastName, registryStep}))
    }
    console.log(errors)
    return (
        <div className="registrationField">
            <div>
                <div className="registrationField-title">Регистрация</div>
                <div className="registrationField-step">2 шаг из 3</div>
            </div>
            <div className="registrationField-input-container">
                <form onSubmit={handleSubmit((data) => onSubmit(data.firstName, data.lastName,3 ))}>
                    <div className="registrationField-form_input">
                        <input type="text"
                               id="registration-login"
                               {...register('firstName', {required: 'email is required'})}
                               className="registrationField-input"
                        />
                        <label htmlFor="registration-login"
                               className="registrationField-input-label filledInput"
                        >
                           Имя
                        </label>
                        <div className="registrationField-input-prompt">
                            {errors.firstName?.message}
                        </div>
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                    <div
                        className="registrationField-form_input registrationField-form_input-password">
                        <input
                            type="password"
                            {...register('lastName', {required: 'this field is required'})}
                            id="registration-password"
                            className="registrationField-input"

                        />
                        <label htmlFor="registration-password"
                               className="registrationField-input-label filledInput">
                            Фамилия
                        </label>
                        {errors.lastName?.message}

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

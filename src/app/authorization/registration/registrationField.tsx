/* eslint-disable */
import nextStep from '../../../assets/svg/next-step.svg'

export const RegistrationField = () => {
    return (
        <div className='registrationField'>
            <div>
                <div className='registrationField-title'>Регистрация</div>
                <div className='registrationField-step'>1 шаг из 3</div>
            </div>
            <div className='registrationField-input-container'>
                <div className='registrationField-form_input'>
                    <input type="text"
                           id='registration-login'
                           className='registrationField-input'
                    />
                    <label htmlFor='registration-login'
                           className='registrationField-input-label'
                    >
                        Придумайте логин для входа
                    </label>
                    <div className='registrationField-input-prompt'>
                        Используйте для логина латинский алфавит и цифры
                    </div>
                </div>
                <div className='registrationField-form_input registrationField-form_input-password'>
                    <input
                        type="password"
                        id='registration-password'
                        className='registrationField-input'

                    />
                    <label htmlFor='registration-password'
                           className='registrationField-input-label'>
                        пароль
                    </label>
                    <div className='registrationField-input-prompt'>
                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                    </div>
                </div>
            </div>
            <div>
                <button className='authorization-next_step'> следующий шаг</button>
            </div>
            <div className='authorization-account_exist'>
                <span>Есть учетная запись?</span>
                <button><span>Войти</span> <img src={nextStep} alt="next-step"/></button>
            </div>

        </div>
    )
}

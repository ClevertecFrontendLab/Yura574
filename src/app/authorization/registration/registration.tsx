/* eslint-disable */


import {RegistrationField_step1} from './registrationField_step-1';
import {NavLink} from 'react-router-dom';
import {RegistrationField_step2} from './registrationField_step-2';
import {useAppDispatch} from '../../../store/store';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import nextStep from '../../../assets/svg/next-step.svg';
import {RegistrationField_step3} from './registrationField_step-3';

export type DataType = {
    login: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string
}

export const Registration = () => {
    // const registryStep = useAppSelector(state => state.auth.registryStep)
    const dispatch = useAppDispatch()

    const [registryStep, setRegistryStep] = useState<number>(3)
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const {handleSubmit, register, formState: {errors, defaultValues,},setValue, getValues, watch} = useForm({
        mode: 'all',
        defaultValues: {
            login: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    })


    const [commonError, setCommonError] = useState<string[]>([])
    const onSubmit = (data: DataType) => {
        if (registryStep === 3) {
            return console.log(data)
        } else setRegistryStep(registryStep + 1)

    }

    const passwordError = errors.password?.message?.split(', ')
    const loginError = errors.login?.message?.split(', ')

    const commonPasswordError = () => {
        if (passwordError?.join('')) setCommonError([...commonError, 'password'])
        if (!getValues('password')) setCommonError([...commonError, 'password'])
    }
    const commonLoginError = () => {
        if (loginError?.join('')) setCommonError([...commonError, 'login'])
        if (!getValues('login')) setCommonError([...commonError, 'login'])
    }

    const onFocusHandlerError = (value: string) => {
        if (commonError.includes(value)) {
            const filter = commonError.filter(el => el !== value)
            setCommonError(filter)
        }
    }

    return (
        <div className="registrationField">
            <div>
                <div className="registrationField-title">Регистрация</div>
                <div className="registrationField-step">{registryStep} шаг из 3</div>
            </div>
            <div className="registrationField-input-container">
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    {registryStep === 1 &&
                        <RegistrationField_step1 register={register}
                                                 commonError={commonError}
                                                 watch={watch}
                                                 onFocusHandlerError={onFocusHandlerError}
                                                 isShowPassword={isShowPassword}
                                                 commonPasswordError={commonPasswordError}
                                                 passwordError={passwordError}
                                                 commonLoginError={commonLoginError}
                                                 loginError={loginError}
                                                 setIsShowPassword={setIsShowPassword}
                                                 errors={errors}
                        />}
                    {registryStep === 2 &&
                        <RegistrationField_step2 register={register}
                                                 watch={watch}
                                                 errors={errors}/>}
                    {registryStep === 3 &&
                        <RegistrationField_step3 register={register}
                                                 watch={watch}
                                                 errors={errors}
                                                 setValue={setValue}
                                                 getValues={getValues}
                                                 defaultValues={defaultValues?.phone}
                        />}

                    {registryStep === 1 &&
                        <button type={'submit'}  className="authorization-next_step">
                            следующий шаг </button>}
                    {registryStep === 2 &&
                        <button type={'submit'}  className="authorization-next_step authorization-last-step">
                            последний шаг </button>}
                    {registryStep === 3 &&
                        <button type={'submit'} className="authorization-next_step">
                            зарегестрироваться </button>}


                </form>
            </div>
            <div className="authorization-account_exist">
                <span>Есть учетная запись?</span>
                <NavLink to={'/authorization/login'}>
                    <button><span className="isExist">Войти</span> <img src={nextStep}
                                                                        alt="next-step"/></button>
                </NavLink>
            </div>

        </div>
    )
}

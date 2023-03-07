/* eslint-disable */
import React from 'react';

import {FieldErrors, UseFormRegister, UseFormWatch} from 'react-hook-form';
import {DataType} from './registration';


type RegistrationField_step2_Type = {
    register: UseFormRegister<DataType>
    watch: UseFormWatch<DataType>
    errors: FieldErrors<DataType>
}
export const RegistrationField_step2 = (props: RegistrationField_step2_Type) => {
    const {register, watch, errors} = props
    return (
        <React.Fragment>
            <div className="registrationField-form_input">
                <input type="text"
                       id="registration-login"
                       {...register('firstName', {required: 'поле не может быть пустым',})}
                       className={errors.firstName ? 'registrationField-input registrationField-input-error ' : 'registrationField-input'}

                />
                <label htmlFor="registration-login"
                       className={watch('firstName') !== ''
                           ? 'registrationField-input-label filledInput'
                           : 'registrationField-input-label'}
                >
                    Имя
                </label>
            </div>
            <div         className={errors.firstName?.message ? 'registrationField-input-prompt errorText' : 'registrationField-input-prompt'}>
                {errors.firstName?.message}
            </div>

            <div className="registrationField-form_input registrationField-form_input-password">
                <input
                    type={'text'}
                    {...register('lastName', {required: 'поле не может быть пустым',})}
                    id="registration-password"
                    className={errors.lastName ? 'registrationField-input registrationField-input-error ' : 'registrationField-input'}

                />
                <label htmlFor="registration-password"
                       className={watch('lastName') !== ''
                           ? 'registrationField-input-label filledInput'
                           : 'registrationField-input-label'}>
                    Фамилия
                </label>

            </div>
            <div
                className={errors.lastName?.message ? 'registrationField-input-prompt errorText' : 'registrationField-input-prompt'}>
                {errors.lastName?.message}
            </div>


        </React.Fragment>
    )
}

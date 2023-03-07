/* eslint-disable */
import React, {ChangeEvent, useEffect, useState} from 'react';

import {FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch} from 'react-hook-form';
import {DataType} from './registration';
import {log} from 'util';


type RegistrationField_step3_Type = {
    register: UseFormRegister<DataType>
    watch: UseFormWatch<DataType>
    errors: FieldErrors<DataType>
    setValue: UseFormSetValue<DataType>
    getValues: UseFormSetValue<DataType>
    defaultValues: string | undefined

}
export const RegistrationField_step3 = (props: RegistrationField_step3_Type) => {
    const {register, watch, errors, setValue, getValues, defaultValues} = props
    const [phone, setPhone] = useState('')
    const phoneInput = watch('phone')
    const getInputNumbersValue = (value: string) => {
        return value.replace(/\D/g, '')
    }
    let newValue = ''
    const onChangeHandler = (value: string) => {

        const inputNumbersValue = getInputNumbersValue(value)
        // console.log('inputNumbersValue', inputNumbersValue , 'length', inputNumbersValue.length)
        // console.log('phone',  getInputNumbersValue(phone), 'length', getInputNumbersValue(phone).length)
        const last = getInputNumbersValue(value[value.length-1])
        console.log(value)
        const newValue = ''
        if (inputNumbersValue.length === 4) {
            if (inputNumbersValue.length >= getInputNumbersValue(phone).length) {
                setPhone(phone + '(' + inputNumbersValue.substring(3, 5))
            } else {
            }
        }
        setValue('phone',watch('phone') + last)
        // if(inputNumbersValue.length === 5){
        //     console.log(getInputNumbersValue(phone))
        //     setPhone(phone  + inputNumbersValue.substring(4,6)+ ') ')
        // }
        // if(inputNumbersValue.length === 8){
        //     debugger
        //     console.log(inputNumbersValue.substring(6,8))
        //     setPhone(phone  + inputNumbersValue.substring(6,8)+ '-')
        // }
    }
    const operatorCod = (value: string) => {
        const cod = Number(value.substring(3, 5))
        // if(cod !== true) return '44 | 33 | 29'
        if (cod === 29 || cod === 33 || cod === 44) {
            return ''
        } else {
            return
        }

    }

    // useEffect(() => {
    //
    //
    //     setValue('phone', phone)
    //
    // }, [phone])

    // console.log(errors)
    return (
        <React.Fragment>
            <div className="registrationField-form_input">
                <input type="text"
                       id="phone-number"
                       {...register('phone', {
                           required: 'поле не может быть пустым',
                           validate: () => operatorCod(watch('phone'))
                       })}
                       className={errors.phone ? 'registrationField-input registrationField-input-error ' : 'registrationField-input'}
                       onChange={(e) => onChangeHandler(e.currentTarget.value)}
                       // onKeyDown={()=>alert(23)}
                       onFocus={() => phone.length === 0 && setValue('phone','+375 ')}
                />
                <label htmlFor="phone-number"
                       className={watch('phone') !== ''
                           ? 'registrationField-input-label filledInput'
                           : 'registrationField-input-label'}
                >
                    Номер телефона
                </label>
            </div>
            <div
                className={errors.phone?.message ? 'registrationField-input-prompt errorText' : 'registrationField-input-prompt'}>
                {errors.phone?.message}
            </div>

            <div className="registrationField-form_input registrationField-form_input-password">
                <input
                    type={'text'}
                    {...register('email', {required: 'поле не может быть пустым',})}
                    id="email"
                    className={errors.email ? 'registrationField-input registrationField-input-error ' : 'registrationField-input'}

                />
                <label htmlFor="email"
                       className={watch('email') !== ''
                           ? 'registrationField-input-label filledInput'
                           : 'registrationField-input-label'}>
                    Email
                </label>

            </div>
            <div
                className={errors.email?.message ? 'registrationField-input-prompt errorText' : 'registrationField-input-prompt'}>
                {errors.email?.message}
            </div>


        </React.Fragment>
    )
}

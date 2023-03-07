/* eslint-disable */
import React from 'react';

import {handleLogin, handlePassword} from './registration-utils';
import truePassword from '../../../assets/svg/true-password.svg';
import openedPassword from '../../../assets/svg/opened-password.svg';
import closedPassword from '../../../assets/svg/closed-password.svg';
import {FieldErrors, UseFormRegister, UseFormWatch} from 'react-hook-form';
import {DataType} from './registration';


type RegistrationField_step1_Type = {
    register: UseFormRegister<DataType>
    commonError: string[]
    watch: UseFormWatch<DataType>
    onFocusHandlerError: (value: string)=> void
    isShowPassword: boolean
    setIsShowPassword: (show: boolean)=> void
    commonPasswordError: ()=> void
    passwordError: string[] | undefined
    commonLoginError: ()=> void
    loginError: string[] | undefined
    errors: FieldErrors<DataType>
}
export const RegistrationField_step1 = (props: RegistrationField_step1_Type) => {
    const { register, commonError, watch, onFocusHandlerError, setIsShowPassword,errors,
    isShowPassword, commonPasswordError, passwordError, commonLoginError, loginError}= props
    return (
      <React.Fragment>
          <div className="registrationField-form_input">
              <input type="text"

                     id="registration-login"
                     {...register('login',
                         {
                             required: 'login is required',
                             validate: {
                                 validateLogin: () => handleLogin(watch('login'))
                             },

                         }
                     )}
                     onFocus={() => onFocusHandlerError('login')}
                     onBlur={commonLoginError}
                     className={errors.login ?"registrationField-input registrationField-input-error ": 'registrationField-input'}

              />
              <label htmlFor="registration-login"
                     className={watch('login') !== ''
                         ? 'registrationField-input-label filledInput'
                         : 'registrationField-input-label'}
              >
                  Придумайте логин для входа
              </label>
          </div>
          <div
              className={commonError.includes('login') || errors.login?.message ==='login is required' ? 'registrationField-input-prompt errorText' : 'registrationField-input-prompt'}>
              Используйте для логина
              <span className={loginError?.includes('only latin') ? 'errorText' : ''}> латинский алфавит</span> и
              <span
                  className={loginError?.includes('no figure') ? 'errorText' : ''}> цифры</span>
          </div>

          <div
              className="registrationField-form_input registrationField-form_input-password">
              <input
                  type={isShowPassword ? 'text' : 'password'}

                  {...register('password',
                      {
                          required: 'password is required',
                          validate: {
                              validatePassword: () => handlePassword(watch('password'))
                          }
                      })}
                  id="registration-password"
                  onBlur={() => commonPasswordError()}
                  onFocus={() => onFocusHandlerError('password')}
                  className={errors.password ?"registrationField-input registrationField-input-error ": 'registrationField-input'}

              />


              <label htmlFor="registration-password"
                     className={watch('password') !== ''
                         ? 'registrationField-input-label filledInput'
                         : 'registrationField-input-label'}>
                  пароль
              </label>
              <div className="showIconPassword"
                   onClick={() => setIsShowPassword(!isShowPassword)}>
                  {watch('password') && passwordError?.join('') === '' &&
                      <img src={truePassword} alt="open  password"/>}
                  <img src={isShowPassword ? openedPassword : closedPassword}
                       alt="open  password"/>
              </div>
          </div>
          <div
              className={commonError.includes('password') || errors.password?.message === 'password is required' ? 'registrationField-input-prompt errorText' : 'registrationField-input-prompt'}>
              Пароль <span
              className={passwordError?.includes('min length < 8') ? 'errorText' : ''}>не менее 8 символов</span>,
              с <span
              className={passwordError?.includes('no capital letter') ? 'errorText' : ''}>заглавной буквой </span>
              и <span
              className={passwordError?.includes('no figure') ? 'errorText' : ''}>цифрой</span>
          </div>

      </React.Fragment>
    )
}

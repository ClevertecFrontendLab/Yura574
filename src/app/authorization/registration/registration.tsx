/* eslint-disable */


import {RegistrationField_step1} from './registrationField_step-1';
import {Route, Routes} from 'react-router-dom';
import {RegistrationField_step2} from './registrationField_step-2';
import {useAppSelector} from '../../../store/store';
import {RegistrationField_step3} from './registrationField_step-3';
import {LoginField} from '../login/loginField';
import React from 'react';

export const Registration = () => {
    const registryStep = useAppSelector(state => state.auth.registryStep)
    return (
        <div>

            {registryStep === 1 && <RegistrationField_step1/>}
            {registryStep === 2 && <RegistrationField_step2/>}
            {registryStep === 3 && <RegistrationField_step3/>}
            {registryStep === 3 && <RegistrationField_step1/>}


        </div>
    )
}

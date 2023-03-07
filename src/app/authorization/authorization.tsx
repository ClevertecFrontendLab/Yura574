/* eslint-disable */


import {RegistrationField_step1} from './registration/registrationField_step-1';
import {Navigate, Route, Routes} from 'react-router-dom';
import {RegistrationField_step2} from './registration/registrationField_step-2';
import {useAppSelector} from '../../store/store';
import {RegistrationField_step3} from './registration/registrationField_step-3';
import {LoginField} from './login/loginField';
import React from 'react';
import {Registration} from './registration/registration';
import {Loader} from '../common-components/loader';

export const Authorization = () => {
    const registryStep = useAppSelector(state => state.auth.registryStep)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const isLoading = useAppSelector(state => state.app.isLoading)
    if(isAuth){
        return <Navigate to={'/'}/>
    }
    return (

        <div className="authorization-wrapper">
            {isLoading && <Loader/>}
            <div className="authorization-container">
                <div className="authorization-title">Cleverland</div>

                <Routes>
                    <Route path={'/registry'} element={<Registration/>}/>
                    <Route path={'/login'} element={<LoginField/>}/>
                </Routes>
                {/* {registryStep === 1 &&<RegistrationField_step1/>} */}
                {/* {registryStep === 2 &&<RegistrationField_step2/>} */}
                {/* {registryStep === 3 &&<RegistrationField_step3/>} */}
                {/* {registryStep === 3 &&<RegistrationField_step1/>} */}




            </div>
        </div>
    )
}

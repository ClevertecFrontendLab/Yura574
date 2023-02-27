/* eslint-disable */
import React from 'react';

import {setIsToggleMenu} from '../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../store/store';

import {Loader} from './common-components/loader';
import {Registration} from "./authorization/registration/registration";
import {Main} from "./main/main";
import {Footer} from "./footer/footer";
import {Header} from "./header/header";

export const App = React.memo(() => {

    const dispatch = useAppDispatch()

    const isToggleMenu = useAppSelector(state => state.app.isToggleMenu)

    const closeToggleMenu = () => {
        isToggleMenu && dispatch(setIsToggleMenu(false))
    }
    return (
        <div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'}
             onClick={closeToggleMenu}>
         <Loader/>

            {/*<Registration/>*/}

            <Header/>
            <Main/>
            <Footer/>

        </div>

    )

})

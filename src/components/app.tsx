/* eslint-disable */
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {setIsToggleMenu} from '../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../store/store';

import {Loader} from './common-components/loader';
import {BookPage} from './book-page';
import {Footer} from './footer';
import {Header} from './header';
import {Main} from './main';
import {Rules} from "./main-section/rules";
import {ContractOffer} from "./main-section/contract-offer";


export const App = () => {


    const dispatch = useAppDispatch()

    const isToggleMenu = useAppSelector(state => state.app.isToggleMenu)
    const isLoading = useAppSelector(state => state.app.isLoading)



    const closeToggleMenu = () => {
        isToggleMenu && dispatch(setIsToggleMenu(false))
    }

    return (
        <div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'}
             onClick={closeToggleMenu}>
            {isLoading && <Loader/>}
            <Header/>
            <Routes>
                < Route path="/" element={<Navigate to="books/all"/>}/>
                <Route path="books/:category/" element={<Main/>}/>
                <Route path="/books/:category/:id" element={<BookPage/>}/>
                <Route path="/rules" element={<Rules/>}/>
                <Route path="/contract-offer" element={<ContractOffer/>}/>
            </Routes>

            <Footer/>
            <Loader/>
        </div>

    )

}

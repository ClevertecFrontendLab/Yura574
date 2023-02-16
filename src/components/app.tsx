/* eslint-disable */
import React from "react";

import {Route, Routes} from 'react-router-dom';
import {Footer} from './footer';
import {Header} from './header';
import {Main} from './main';
import {BookPage} from './book-page';
import {useAppDispatch, useAppSelector} from "../store/store";
import {setIsToggleMenu} from "../store/reducers/app-reducers";
import {Loader} from "./common-components/loader";


export const App = () => {
    const dispatch = useAppDispatch()

    const isToggleMenu = useAppSelector(state => state.app.isToggleMenu)
    const isLoading = useAppSelector(state => state.app.isLoading)



    const closeToggleMenu = () => {
        isToggleMenu && dispatch(setIsToggleMenu(false))
    }

    return (
        <div className={isToggleMenu ? "wrapper wrapper-active" : 'wrapper'}
             onClick={closeToggleMenu}>
            {isLoading && <Loader/>}
            <Header/>
            <Routes>
                <Route path="/*" element={<Main/>}/>
                <Route path="/books/all/:id" element={<BookPage/>}/>

            </Routes>

            <Footer/>
            <Loader/>
        </div>

    )

}

/* eslint-disable */
import React, {useEffect} from 'react';

import {setExtraMenu, setIsLoading, setIsToggleMenu} from '../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../store/store';

import {Loader} from './common-components/loader';
import {Main} from './main/main';
import {Footer} from './footer/footer';
import {Header} from './header/header';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LoginField} from './authorization/login/loginField';
import {Authorization} from './authorization/authorization';
import {
    getAllBooks,
    getAllCategories,
    getAllCategoriesAndBooks
} from '../store/reducers/book-reducer';
import {setIsAuth} from '../store/reducers/auth-reducer';

export const App = React.memo(() => {
    const dispatch = useAppDispatch()

    const isToggleMenu = useAppSelector(state => state.app.isToggleMenu)
    const isExtraMenu = useAppSelector(state => state.app.isExtraMenu)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const books = useAppSelector(state => state.books.allBooks)
    const categories = useAppSelector(state => state.books.categories)
    const isLoading = useAppSelector(state => state.app.isLoading)


    const closeToggleMenu = () => {
        isToggleMenu && dispatch(setIsToggleMenu(false))
        isExtraMenu && dispatch(setExtraMenu(false))
    }

    useEffect(() => {
        if (localStorage.getItem('jwtToken') !== null ) {
            console.log(localStorage.getItem('jwtToken'))
            // dispatch(getAllCategories())
            dispatch(setIsLoading(true))
            // dispatch(getAllCategories())
            dispatch(getAllCategoriesAndBooks())
            // dispatch(getAllBooks())

        }
    }, [])
    // if(!isAuth && isLoading){
    //     return <Loader/>
    // }
    return (
        <div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'}
             onClick={closeToggleMenu}>

            <Routes>
                <Route path={'/*'}
                       element={<div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'}
                                     onClick={closeToggleMenu}>
                           {isLoading && <Loader/>}
                           <Header/>
                           <Main/>
                           <Footer/>
                       </div>}/>
                <Route path={'/authorization/*'} element={<Authorization/>}/>

            </Routes>

            {/* <Routes> */}
            {/*     <Route path={'/'} element={  <div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'} */}
            {/*                                       onClick={closeToggleMenu}> */}
            {/*         <Loader/> */}

            {/*         <Header/> */}
            {/*         <Main/> */}
            {/*         <Footer/> */}
            {/*     </div>}/> */}
            {/*     /!* <Route path={'/register'} element={<Registration/>}/> *!/ */}
            {/* </Routes> */}
            {/* {!isAuth ? */}
            {/*     <div><Registration/></div> */}


            {/*            : <div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'} */}
            {/*                  onClick={closeToggleMenu}> */}
            {/*                 <Loader/> */}

            {/*                 <Header/> */}
            {/*                 /!* <Main/> *!/ */}
            {/*                 <Footer/> */}
            {/*             </div> */}
            {/*         } */}


        </div>
    )

})

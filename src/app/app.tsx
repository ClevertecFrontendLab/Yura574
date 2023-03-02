/* eslint-disable */
import React, {useEffect} from 'react';

import {setIsToggleMenu} from '../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../store/store';

import {Loader} from './common-components/loader';
import {Main} from './main/main';
import {Footer} from './footer/footer';
import {Header} from './header/header';
import { Route, Routes} from 'react-router-dom';
import {LoginField} from './authorization/login/loginField';
import {Authorization} from './authorization/authorization';
import {getAllBooks, getAllCategories} from '../store/reducers/book-reducer';

export const App = React.memo(() => {

    const dispatch = useAppDispatch()

    const isToggleMenu = useAppSelector(state => state.app.isToggleMenu)


    const closeToggleMenu = () => {
        isToggleMenu && dispatch(setIsToggleMenu(false))
    }
    useEffect(() => {
        dispatch(getAllBooks())
        dispatch(getAllCategories())
    }, [])

    useEffect(()=>{

    }, [dispatch])

    return (
        <div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'}
             onClick={closeToggleMenu}>
            <Routes>
                <Route path={'/'}
                       element={<div className={isToggleMenu ? 'wrapper wrapper-active' : 'wrapper'}
                                     onClick={closeToggleMenu}>
                           <Loader/>

                           <Header/>
                           <Main/>
                           <Footer/>
                       </div>}/>
                <Route path={'/authorization/*'} element={<Authorization/>} />

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

/* eslint-disable */
import React, {MouseEvent, useState} from 'react';
import {Navigate, NavLink} from 'react-router-dom';

import avatar from '../../assets/png/avatar.png'
import cleverland from '../../assets/svg/Cleverland.svg'
import logo from '../../assets/svg/logo.svg'
import {useAppDispatch, useAppSelector} from '../../store/store';
import {useWindowSize} from '../../utils/utils';

import {BurgerMenu} from '../main/main-section/view-items/burger-menu';
import {Navbar} from '../main/main-section/navbar';
import {getAllBooks} from '../../store/reducers/book-reducer';
import {setExtraMenu} from '../../store/reducers/app-reducers';
import {setIsAuth} from '../../store/reducers/auth-reducer';

export const Header = () => {
    const dispatch = useAppDispatch()

    const isMenuToggle = useAppSelector(state => state.app.isToggleMenu);
    const currentCategory = useAppSelector(state => state.app.currentCategory)
    const isExtraMenu = useAppSelector(state => state.app.isExtraMenu)

    const extraMenuHandle = (e: MouseEvent<HTMLDivElement>,view: boolean) => {
        e.stopPropagation();
        dispatch(setExtraMenu(view))
    }
    const size = useWindowSize()
    const click = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const logout = () =>{
        localStorage.removeItem('jwtToken')
        dispatch(setIsAuth(false))
        return <Navigate to={'/'}/>
    }

    return (
        <header className="layout-main-page header-wrapper">
            <div className="container">
                <NavLink to={currentCategory ? `/books/${currentCategory}` : '/'}
                         onClick={() => dispatch(getAllBooks())}>
                    <div className="logo-container">
                        <img src={logo} alt="logo"/>
                        <img src={cleverland} alt="avatar"/>
                    </div>
                </NavLink>

                <div className="header-container">
                    <div className="header__name_wrapper">
                        <BurgerMenu/>
                        <div className="header-name">Библиотека</div>
                    </div>
                    <div className="login-wrapper" onClick={(e) => extraMenuHandle(e,true)}>
                        <div className="name">Привет,Ваня!</div>
                        <img src={avatar} alt="avatar"/>
                        {isExtraMenu && <div className="extra_button_profile">
                            <div className="profile">Профиль</div>
                            <div className="exit" onClick={logout}>Выход</div>
                        </div> }
                    </div>
                </div>
            </div>
            {size.width < 769 &&
                <div onClick={(e) => click(e)}
                     className={isMenuToggle
                ? 'burger-menu__sidebar burger-menu__sidebar_active'
                : 'burger-menu__sidebar'}>
                <Navbar sidebar={true}
                        showcase="burger-showcase"
                        books="burger-books"
                        terms="burger-terms"
                        contract="burger-contract"
                        dataTestId="burger"
                />
                <div className="extra_button">
                    <div className="profile">Профиль</div>
                    <div className="exit" onClick={logout}>Выход</div>
                </div>
            </div>
            }

        </header>
    )
}

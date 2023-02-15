// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { MouseEvent } from 'react';
import {NavLink} from 'react-router-dom';

import avatar from '../assets/png/avatar.png'
import cleverland from '../assets/svg/Cleverland.svg'
import logo from '../assets/svg/logo.svg'
import { useAppSelector } from '../store/store';

import {BurgerMenu} from './main-section/view-items/burger-menu';
import { Navbar } from './navbar';
/* eslint-disable */
export const Header = () => {
    const isMenuToggle = useAppSelector(state => state.app.isToggleMenu);

    const click = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };
    return (
        <header className=" layout-main-page header-wrapper">
            <div className='container'>
                <NavLink to='/'>
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                        <img src={cleverland} alt="avatar" />
                    </div>
                </NavLink>

                <div className="header-container">
                    <div className='header__name_wrapper'>
                        <BurgerMenu />
                        <div className="header-name">Библиотека</div>
                    </div>
                    <div className="login-wrapper">
                        <div className='name'>Привет,Ваня!</div>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
            </div>
            <div onClick={(e) => click(e)} className={isMenuToggle
                ? "burger-menu__sidebar burger-menu__sidebar_active"
                : "burger-menu__sidebar"}>
                <Navbar sidebar={true}
                        showcase='burger-showcase'
                        books='burger-books'
                        terms='burger-terms'
                        contract='burger-contract'
                />
                <div>dfdffd</div>
                <div>dfdffd</div>
            </div>

        </header>
    )
}

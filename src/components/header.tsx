/* eslint-disable */
import React, {MouseEvent} from 'react';
import {NavLink} from 'react-router-dom';

import avatar from '../assets/png/avatar.png'
import cleverland from '../assets/svg/Cleverland.svg'
import logo from '../assets/svg/logo.svg'
import {useAppSelector} from '../store/store';
import {useWindowSize} from '../utils/utils';

import {Error} from './common-components/error';
import {BurgerMenu} from './main-section/view-items/burger-menu';
import {Navbar} from './navbar';

export const Header = () => {
    const isMenuToggle = useAppSelector(state => state.app.isToggleMenu);
    const error = useAppSelector(state => state.app.error)
    const size = useWindowSize()

    const click = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <header className="layout-main-page header-wrapper">
            <div className='container'>
                <NavLink to='/'>
                    <div className="logo-container">
                        <img src={logo} alt="logo"/>
                        <img src={cleverland} alt="avatar"/>
                    </div>
                </NavLink>

                <div className="header-container">
                    <div className='header__name_wrapper'>
                        <BurgerMenu/>
                        <div className="header-name">Библиотека</div>
                    </div>
                    <div className="login-wrapper">
                        <div className='name'>Привет,Ваня!</div>
                        <img src={avatar} alt="avatar"/>
                    </div>
                </div>
            </div>
            {size.width < 769 && <div onClick={(e) => click(e)} className={isMenuToggle
                ? 'burger-menu__sidebar burger-menu__sidebar_active'
                : 'burger-menu__sidebar'}>
                <Navbar sidebar={true}
                        showcase='burger-showcase'
                        books='burger-books'
                        terms='burger-terms'
                        contract='burger-contract'
                />
                <div className='extra_button'>
                    <div className='profile'>Профиль</div>
                    <div className='exit'>Выход</div>
                </div>
            </div>
            }
            {error ? <Error/> : false}

        </header>
    )
}

/* eslint-disable */
import {NavLink} from 'react-router-dom';

import arrowBottom from '../assets/svg/arrow-bottom.svg';
import arrowTop from '../assets/svg/arrow-top.svg';
import {setActiveLink, setError, setIsToggleList} from '../store/reducers/app-reducers';
import {useAppDispatch, useAppSelector} from '../store/store';
import {useState} from "react";

type NavbarType = {
    sidebar: boolean
    showcase: string
    books: string
    terms: string
    contract: string
}
export const Navbar = (props: NavbarType) => {

    const dispatch = useAppDispatch();
    const active = useAppSelector(state => state.app.activeLink);
    const isToggle = useAppSelector(state => state.app.isToggleList);
    const categories = useAppSelector(state => state.books.categories)
    const error = useAppSelector(state => state.app.error)


    const activate = () => {
        dispatch(setActiveLink(true));
    };
    const diActivate = () => {
        dispatch(setActiveLink(false));
        dispatch(setIsToggleList(false));
    };
    // console.log('navbar')
    const [test, setTest] =useState(true)
    return (
        <nav data-test-id="burger-navigation" className={props.sidebar
            ? 'navbar__wrapper navbar__wrapper_visible'
            : 'navbar__wrapper navbar__wrapper_invisible'}>
            <div
                data-test-id={props.showcase}
                onClick={() => dispatch(setIsToggleList(!isToggle))}>
                <NavLink to="/"
                         onClick={activate}
                         className={({isActive}) => isActive || active ? 'navbar__active-title' : 'navbar_title'}>
                    Витрина книг
                    {active ?
                        <div className={active ? 'navbar__toggle-menu' : 'navbar__toggle-menu'}
                             onClick={() => setTest(!test)}>{test
                            ? <img src={arrowTop} alt="arrow"/>
                            : <img src={arrowBottom} alt="arrow"/>}
                        </div>
                        : false}
                </NavLink>
            </div>
            <ul className={isToggle ? 'navbar-list_books' : 'navbar__list-book__invisible'}>
                {!error &&
                    <li data-test-id={props.books}>
                        <NavLink to="/books/all"
                                 onClick={activate}
                                 className={({isActive}) => isActive ? 'navbar__active-title' : ''}>
                            Все книги
                        </NavLink>

                    </li>
                }
                {!error && categories && categories.map(el => (
                    <li key={el.id}>
                        <NavLink to={`/books/${el.path}`}
                                 onClick={activate}
                                 className={({isActive}) => isActive ? 'navbar__active-title' : ''}>
                            {el.name}
                        </NavLink></li>
                ))}
            </ul>
            <div data-test-id={props.terms} className="navbar-rules-container" onClick={diActivate}>
                <NavLink to="/rules" onClick={() => dispatch(setError(null))}
                         className={({isActive}) => isActive ? 'navbar__active-title' : 'navbar-rules'}>
                    Правила пользования</NavLink>
            </div>
            <div data-test-id={props.contract} className="navbar-rules-container"
                 onClick={diActivate}>
                <NavLink to="/contract-offer" onClick={() => dispatch(setError(null))}
                         className={({isActive}) => isActive ? 'navbar__active-title' : 'navbar-rules'}>
                    Договор оферты</NavLink>
            </div>
        </nav>
    );
};

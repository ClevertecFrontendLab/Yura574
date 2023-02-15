/* eslint-disable */
import {NavLink} from "react-router-dom";
import arrowBottom from "../assets/svg/arrow-bottom.svg";
import arrowTop from "../assets/svg/arrow-top.svg";
import {useAppDispatch, useAppSelector} from "../store/store";
import {setActiveLink, setIsToggleList} from "../store/reducers/app-reducers";


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
        return "navbar__active-title";

    };
    const diActivate = () => {
        dispatch(setActiveLink(false));
        dispatch(setIsToggleList(false));

        return "navbar__active-title";
    };

    return (
        <nav data-test-id="burger-navigation" className={props.sidebar
            ? "navbar__wrapper navbar__wrapper_visible"
            : "navbar__wrapper navbar__wrapper_invisible"}>
            <div
                data-test-id={props.showcase}
                onClick={() => dispatch(setIsToggleList(!isToggle))}>
                <NavLink to="/"
                         className={({isActive}) => isActive || active ? "navbar__active-title" : "navbar_title"}>
                    Витрина книг
                    {active ?
                        <div className={active ? "navbar__toggle-menu" : "navbar__toggle-menu"}
                             onClick={() => dispatch(setIsToggleList(!isToggle))}>{isToggle
                            ? <img src={arrowTop} alt="arrow"/>
                            : <img src={arrowBottom} alt="arrow"/>}
                        </div>
                        : false}
                </NavLink>
            </div>
            <ul className={isToggle ? "navbar-list_books" : "navbar__list-book__invisible"}>
                {!error
                    ? <li data-test-id={props.books}>
                    <NavLink to="/"
                             onClick={activate}
                             className={({isActive}) => isActive ? "navbar__active-title" : "item"}>
                        Все книги
                    </NavLink>

                </li> : false}
                {!error && categories &&categories.map(el => (
                    <li key={el.id}>
                        <NavLink to={`/category/${el.id}`}
                                 onClick={activate}
                                 className={({isActive}) => isActive ? "navbar__active-title" : "item"}>
                            {el.name}
                        </NavLink></li>
                ))}
            </ul>
            <div data-test-id={props.terms} className="navbar-rules-container" onClick={diActivate}>
                <NavLink to="/rules"
                         className={({isActive}) => isActive ? "navbar__active-title" : "navbar-rules"}>
                    Правила пользования</NavLink>
            </div>
            <div data-test-id={props.contract} className="navbar-rules-container"
                 onClick={diActivate}>
                <NavLink to="/contract-offer"
                         className={({isActive}) => isActive ? "navbar__active-title" : "navbar-rules"}>
                    Договор оферты</NavLink>
            </div>
        </nav>
    );
};

/* eslint-disable */
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setIsToggleMenu } from "../../../store/reducers/app-reducers";
import { Navbar } from "../../navbar";
import React, { MouseEvent } from "react";


export const BurgerMenu = () => {
    const dispatch = useAppDispatch();
    const isToggleMenu = useAppSelector<boolean>(state => state.app.isToggleMenu);

    return (
        <div className="burger-menu__wrapper">
            <button data-test-id='button-burger' className={isToggleMenu
                ? "burger-menu__container burger-menu__container_active"
                : "burger-menu__container "}
                 onClick={() => dispatch(setIsToggleMenu(!isToggleMenu))}>
                <div >
                    <div className="burger-menu__icon first">1</div>
                    <div className="burger-menu__icon second">1</div>
                    <div className="burger-menu__icon third">1</div>
                    <div className="burger-menu__icon fourth">1</div>
                </div>


            </button>

        </div>
    );
};

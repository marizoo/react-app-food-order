import React from "react";
import cm from "./header.module.css";
import Cart from "../cart/Cart";

const Header = ({ onHandleOpenModal }) => {
    return (
        <div className={cm.header}>
            <div className={cm.headerContainer}>
                <div className={cm.headerLogo}>
                    <h2 className={cm.headerLogoText}>Mealz</h2>
                </div>
                <Cart onHandleOpenModal={onHandleOpenModal} />
            </div>
        </div>
    );
};

export default Header;

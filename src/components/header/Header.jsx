import React from "react";
import cm from "./header.module.css";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
    return (
        <div className={cm.header}>
            <div className={cm.headerContainer}>
                <div className={cm.headerLogo}>
                    <h2 className={cm.headerLogoText}>Mealz</h2>
                </div>
                <div className={cm.headerCartContainer}>
                    <CgShoppingCart className={cm.headerCartIcon} />
                    <p className={cm.headerCartText}>Your Cart</p>
                    <div className={cm.headerCartQuantity}>0</div>
                </div>
            </div>
        </div>
    );
};

export default Header;

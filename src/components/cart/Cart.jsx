import React from "react";
import cm from "./cart.module.css";
import { CgShoppingCart } from "react-icons/cg";

const Cart = ({ onHandleOpenModal }) => {
    return (
        <div className={cm.headerCartContainer} onClick={onHandleOpenModal}>
            <CgShoppingCart className={cm.headerCartIcon} />
            <p className={cm.headerCartText}>Your Cart</p>
            <div className={cm.headerCartQuantity}>0</div>
        </div>
    );
};

export default Cart;

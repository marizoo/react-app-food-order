import React, { useContext } from "react";
import cm from "./cart.module.css";
import { CgShoppingCart } from "react-icons/cg";
import CartContext from "../../store/cart-context";

const Cart = ({ onHandleOpenModal }) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return (
        <button className={cm.headerCartContainer} onClick={onHandleOpenModal}>
            <CgShoppingCart className={cm.headerCartIcon} />
            <p className={cm.headerCartText}>Your Cart</p>
            <div className={cm.headerCartQuantity}>{numberOfCartItems}</div>
        </button>
    );
};

export default Cart;

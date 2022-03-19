import React, { useContext } from "react";
import MenuPriceForm from "../menuPriceForm/MenuPriceForm";
import cm from "./menuCard.module.css";
import CartContext from "../../store/cart-context";

const MenuCard = ({ data }) => {
    const cartCtx = useContext(CartContext);

    const price = `${data.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: data.id,
            name: data.name,
            amount: amount,
            price: data.price,
        });
    };

    return (
        <div className={cm.menuCard}>
            <div className={cm.menuItems}>
                <h3 className={cm.menuItemTitle}>{data.name}</h3>
                <p className={cm.menuItemDesc}>{data.description}</p>
                <h3 className={cm.menuItemPrice}>${price}</h3>
            </div>

            <MenuPriceForm onAddToCart={addToCartHandler} id={data.id} />

            <div className={cm.menuLine}></div>
        </div>
    );
};

export default MenuCard;

import React from "react";
import MenuPriceForm from "../menuPriceForm/MenuPriceForm";
import cm from "./menuCard.module.css";

const MenuCard = ({ data }) => {
    const price = `${data.price.toFixed(2)}`;

    const handlePriceForm = (ev) => {
        ev.preventDefault();
    };

    return (
        <div className={cm.menuCard}>
            <div className={cm.menuItems}>
                <h3 className={cm.menuItemTitle}>{data.name}</h3>
                <p className={cm.menuItemDesc}>{data.description}</p>
                <h3 className={cm.menuItemPrice}>${price}</h3>
            </div>

            <MenuPriceForm onHandlePriceForm={handlePriceForm} id={data.id} />

            <div className={cm.menuLine}></div>
        </div>
    );
};

export default MenuCard;

import React from "react";
import Button from "../../UI/button/Button";
// import Input from "../../UI/input/Input";
import cm from "./menuCard.module.css";

const MenuCard = ({ data }) => {
    const price = `$${data.price.toFixed(2)}`;

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

            <form onSubmit={handlePriceForm} className={cm.menuPrice}>
                <div className={cm.menuPriceTop}>
                    <h3 className={cm.menuPriceTopText}>Amount</h3>
                    <input
                        className={cm.menuPriceTopInput}
                        type="number"
                        placeholder="1"
                    />
                    {/* <Input className={cm.menuPriceTopInput} /> */}
                </div>

                <div className={cm.menuPriceBottom}>
                    <Button type="submit" className={cm.menuPriceBottomAddBtn}>
                        +Add
                    </Button>
                </div>
            </form>

            <div className={cm.menuLine}></div>
        </div>
    );
};

export default MenuCard;

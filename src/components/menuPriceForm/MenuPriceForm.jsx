import React from "react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import cm from "./menuPriceForm.module.css";

const MenuPriceForm = ({ onHandlePriceForm, id }) => {
    return (
        <form onSubmit={onHandlePriceForm} className={cm.menuPrice}>
            <div className={cm.menuPriceTop}>
                {/* <h3 className={cm.menuPriceTopText}>Amount</h3> */}
                {/* make into a component */}
                <Input
                    label="Amount"
                    input={{
                        id: "amount_" + id,
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
            </div>

            <div className={cm.menuPriceBottom}>
                <Button type="submit" className={cm.menuPriceBottomAddBtn}>
                    +Add
                </Button>
            </div>
        </form>
    );
};

export default MenuPriceForm;

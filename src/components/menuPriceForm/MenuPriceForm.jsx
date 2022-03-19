import React, { useRef, useState } from "react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import cm from "./menuPriceForm.module.css";

const MenuPriceForm = ({ onAddToCart, id }) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (ev) => {
        ev.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        // for the above, the input will always be in "string", so we need to force convert into a value by adding a "+"
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmount < 1 ||
            enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmountNumber);
    };

    return (
        <form onSubmit={submitHandler} className={cm.menuPrice}>
            <div className={cm.menuPriceTop}>
                <Input
                    ref={amountInputRef}
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
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </div>
        </form>
    );
};

export default MenuPriceForm;

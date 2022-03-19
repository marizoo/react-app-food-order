import React, { useContext } from "react";
import Button from "../../UI/button/Button";
import Card from "../../UI/card/Card";
import cm from "./modalOrderCart.module.css";
import CartContext from "../../store/cart-context";

const ModalOrderCart = (props) => {
    const cartCtx = useContext(CartContext);

    // const price = {props.price.toFixed(2)};
    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {};

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    // what is this "bind" about?
    // onRemove={cartItemRemoveHandler.bind(null, item.id)}
    // onAdd={cartItemAddHandler.bind(null, item)}

    // const cartItems = [
    //     {
    //         id: "c1",
    //         name: "Sushi",
    //         amount: 3,
    //         price: 15.99,
    //     },
    // ];

    return (
        <Card className={cm.orderModalCard}>
            <div className={cm.orderModalContainer}>
                {cartCtx.items.map((item) => (
                    <div key={item.id} className={cm.orderModalItems}>
                        <div className={cm.orderModalItemsLeft}>
                            <div className={cm.orderModalItemsLeftTop}>
                                <h3 className={cm.orderModalItemsLeftTopText}>
                                    {item.name}
                                </h3>
                            </div>
                            <div className={cm.orderModalItemsLeftBottom}>
                                <h4
                                    className={
                                        cm.orderModalItemsLeftBottomPrice
                                    }
                                >
                                    ${item.price}
                                </h4>
                                <p
                                    className={
                                        cm.orderModalItemsLeftBottomAmount
                                    }
                                >
                                    x {item.amount}
                                </p>
                            </div>
                        </div>
                        <div className={cm.orderModalItemsRight}>
                            <button
                                onClick={cartItemRemoveHandler}
                                className={cm.orderModalItemsRightButtonMinus}
                            >
                                -
                            </button>
                            <button
                                onClick={cartItemAddHandler}
                                className={cm.orderModalItemsRightButtonPlus}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}

                <div className={cm.orderModalLine}></div>
                <div className={cm.orderModalTotalContainer}>
                    <h3 className={cm.orderModalTotal}>Total Amount</h3>
                    <h3 className={cm.orderModalAmount}>${totalAmount}</h3>
                </div>
                <div className={cm.orderModalButtonContainer}>
                    <Button
                        className={cm.orderModalButtonClose}
                        onClick={props.onHandleCloseModal}
                    >
                        close
                    </Button>
                    {hasItems && (
                        <Button className={cm.orderModalButtonPay}>
                            Order
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ModalOrderCart;

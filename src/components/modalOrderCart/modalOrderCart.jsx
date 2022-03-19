import React from "react";
import Button from "../../UI/button/Button";
import Card from "../../UI/card/Card";
import cm from "./modalOrderCart.module.css";

const modalOrderCart = (props) => {
    const cartItems = [
        {
            id: "c1",
            name: "Sushi",
            amount: 3,
            price: 15.99,
        },
    ];

    return (
        <Card className={cm.orderModalCard}>
            <div className={cm.orderModalContainer}>
                {cartItems.map((item) => (
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
                            <div className={cm.orderModalItemsRightButtonMinus}>
                                -
                            </div>
                            <div className={cm.orderModalItemsRightButtonPlus}>
                                +
                            </div>
                        </div>
                    </div>
                ))}

                <div className={cm.orderModalLine}></div>
                <div className={cm.orderModalTotalContainer}>
                    <h3 className={cm.orderModalTotal}>Total Amount</h3>
                    <h3 className={cm.orderModalAmount}>$33.00</h3>
                </div>
                <div className={cm.orderModalButtonContainer}>
                    <Button
                        className={cm.orderModalButtonClose}
                        onClick={props.onHandleCloseModal}
                    >
                        close
                    </Button>
                    <Button className={cm.orderModalButtonPay}>Pay Now</Button>
                </div>
            </div>
        </Card>
    );
};

export default modalOrderCart;

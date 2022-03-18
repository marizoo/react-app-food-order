import React from "react";
import ReactDOM from "react-dom";
import Button from "../../UI/button/Button";
import Card from "../../UI/card/Card";
import cm from "./modalOrder.module.css";

const Backdrop = (props) => {
    return (
        <div
            className={cm.modalBackdrop}
            onClick={props.onHandleCloseModal}
        ></div>
    );
};

const OrderModal = (props) => {
    return (
        <Card className={cm.orderModalCard}>
            <div className={cm.orderModalContainer}>
                <div className={cm.orderModalItems}>
                    <div className={cm.orderModalItemsLeft}>
                        <div className={cm.orderModalItemsLeftTop}>
                            <h3 className={cm.orderModalItemsLeftTopText}>
                                Schnitzel
                            </h3>
                        </div>
                        <div className={cm.orderModalItemsLeftBottom}>
                            <h4 className={cm.orderModalItemsLeftBottomPrice}>
                                $16.5
                            </h4>
                            <p className={cm.orderModalItemsLeftBottomAmount}>
                                x 2
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

const ModalOrder = (props) => {
    return (
        <div className={cm.ModalOrder}>
            {ReactDOM.createPortal(
                <Backdrop onHandleCloseModal={props.onHandleCloseModal} />,
                document.getElementById("root-backdrop")
            )}
            {ReactDOM.createPortal(
                <OrderModal onHandleCloseModal={props.onHandleCloseModal} />,
                document.getElementById("root-overlay")
            )}
        </div>
    );
};

export default ModalOrder;

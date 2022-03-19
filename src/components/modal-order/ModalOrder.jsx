import React from "react";
import ReactDOM from "react-dom";
import ModalOrderCart from "../modalOrderCart/modalOrderCart";
import cm from "./modalOrder.module.css";

const Backdrop = (props) => {
    return (
        <div
            className={cm.modalBackdrop}
            onClick={props.onHandleCloseModal}
        ></div>
    );
};

const rootBackdrop = document.getElementById("root-backdrop");
const rootOverlay = document.getElementById("root-overlay");

const ModalOrder = (props) => {
    return (
        <div className={cm.ModalOrder}>
            {ReactDOM.createPortal(
                <Backdrop onHandleCloseModal={props.onHandleCloseModal} />,
                rootBackdrop
            )}
            {ReactDOM.createPortal(
                <ModalOrderCart
                    onHandleCloseModal={props.onHandleCloseModal}
                />,
                rootOverlay
            )}
        </div>
    );
};

export default ModalOrder;

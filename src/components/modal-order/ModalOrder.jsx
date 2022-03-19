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

const ModalOrder = (props) => {
    return (
        <div className={cm.ModalOrder}>
            {ReactDOM.createPortal(
                <Backdrop onHandleCloseModal={props.onHandleCloseModal} />,
                document.getElementById("root-backdrop")
            )}
            {ReactDOM.createPortal(
                <ModalOrderCart
                    onHandleCloseModal={props.onHandleCloseModal}
                />,
                document.getElementById("root-overlay")
            )}
        </div>
    );
};

export default ModalOrder;

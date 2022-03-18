import React from "react";
import cm from "./button.module.css";

const Button = (props) => {
    return (
        <button
            className={`${cm.button} ${props.className}`}
            type={`${props.type} || 'button'`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;

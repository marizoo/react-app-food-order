import React from "react";
import cm from "./input.module.css";

const Input = (props) => {
    return (
        <div className={cm.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
};

export default Input;

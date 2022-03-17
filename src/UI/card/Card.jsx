import React from "react";
import cm from "./card.module.css";

const Card = (props) => {
    return (
        <div className={`${cm.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;

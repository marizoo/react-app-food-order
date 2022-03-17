import React from "react";
import cm from "./hero.module.css";

const Hero = () => {
    return (
        <div className={cm.hero}>
            <div className={cm.heroContainer}>
                <h2 className={cm.heroContainerTitle}>Order Yummy Meals</h2>
            </div>
        </div>
    );
};

export default Hero;

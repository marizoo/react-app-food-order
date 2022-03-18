import React from "react";
import Card from "../../UI/card/Card";
import MenuCard from "../menuCard/MenuCard";
import cm from "./menu.module.css";

const Menu = ({ datas }) => {
    return (
        <div className={cm.menu}>
            <Card>
                <div className={cm.menuContainer}>
                    {datas.map((data) => (
                        <MenuCard key={data.id} data={data} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Menu;

import React from "react";
import Button from "../../UI/button/Button";
import Card from "../../UI/card/Card";
import cm from "./menu.module.css";

const Menu = () => {
    return (
        <div className={cm.menu}>
            <Card>
                <div className={cm.menuContainer}>
                    {/* menu card 1 */}
                    <div className={cm.menuCard}>
                        <div className={cm.menuItems}>
                            <h3 className={cm.menuItemTitle}>Sushi</h3>
                            <p className={cm.menuItemDesc}>
                                Finest fish and veges
                            </p>
                            <h3 className={cm.menuItemPrice}>$22.99</h3>
                        </div>

                        <div className={cm.menuPrice}>
                            <div className={cm.menuPriceTop}>
                                <h3 className={cm.menuPriceTopText}>Amount</h3>
                                <input
                                    className={cm.menuPriceTopInput}
                                    type="number"
                                    placeholder="1"
                                />
                            </div>

                            <div className={cm.menuPriceBottom}>
                                <Button className={cm.menuPriceBottomAddBtn}>
                                    +Add
                                </Button>
                            </div>
                        </div>
                        <div className={cm.menuLine}></div>
                    </div>
                    {/* menu card 2 */}
                    <div className={cm.menuCard}>
                        <div className={cm.menuItems}>
                            <h3 className={cm.menuItemTitle}>Sushi</h3>
                            <p className={cm.menuItemDesc}>
                                Finest fish and veges
                            </p>
                            <h3 className={cm.menuItemPrice}>$22.99</h3>
                        </div>

                        <div className={cm.menuPrice}>
                            <div className={cm.menuPriceTop}>
                                <h3 className={cm.menuPriceTopText}>Amount</h3>
                                <input
                                    className={cm.menuPriceTopInput}
                                    type="number"
                                    placeholder="1"
                                />
                            </div>

                            <div className={cm.menuPriceBottom}>
                                <Button className={cm.menuPriceBottomAddBtn}>
                                    +Add
                                </Button>
                            </div>
                        </div>
                        <div className={cm.menuLine}></div>
                    </div>
                    {/* menu card 3 */}
                    <div className={cm.menuCard}>
                        <div className={cm.menuItems}>
                            <h3 className={cm.menuItemTitle}>Sushi</h3>
                            <p className={cm.menuItemDesc}>
                                Finest fish and veges
                            </p>
                            <h3 className={cm.menuItemPrice}>$22.99</h3>
                        </div>

                        <div className={cm.menuPrice}>
                            <div className={cm.menuPriceTop}>
                                <h3 className={cm.menuPriceTopText}>Amount</h3>
                                <input
                                    className={cm.menuPriceTopInput}
                                    type="number"
                                    placeholder="1"
                                />
                            </div>

                            <div className={cm.menuPriceBottom}>
                                <Button className={cm.menuPriceBottomAddBtn}>
                                    +Add
                                </Button>
                            </div>
                        </div>
                        <div className={cm.menuLine}></div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Menu;

import { useState } from "react";
import Header from "./components/header/Header";
import "./appStyle.css";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import ModalOrder from "./components/modal-order/ModalOrder";
import CartProvider from "./store/CartProvider";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const App = () => {
    // 01. a1/3. State to show/close modal
    const [showModalOrder, setShowModalOrder] = useState();

    // 02. a1/x. State to keep dummy datas
    // const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
    const [datas, setDatas] = useState(DUMMY_MEALS);

    // 01. a2/3. State to close modal
    const handleCloseModal = () => {
        setShowModalOrder(null);
    };
    // 01. a3/3. State to show/close modal
    const handleOpenModal = () => {
        setShowModalOrder(true);
    };

    return (
        <CartProvider>
            <div className="app">
                <div className="app-container">
                    {showModalOrder && (
                        <ModalOrder onHandleCloseModal={handleCloseModal} />
                    )}
                    <Header onHandleOpenModal={handleOpenModal} />
                    <Hero />
                    <Menu datas={datas} />
                </div>
            </div>
        </CartProvider>
    );
};

export default App;

import { useState } from "react";
import Header from "./components/header/Header";
import "./appStyle.css";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import ModalOrder from "./components/modal-order/ModalOrder";

const App = () => {
    const [showModalOrder, setShowModalOrder] = useState();

    const handleCloseModal = () => {
        // setShowModalOrder(!showModalOrder);
        setShowModalOrder(null);
    };

    const handleOpenModal = () => {
        setShowModalOrder(true);
    };

    return (
        <div className="app">
            <div className="app-container">
                {showModalOrder && (
                    <ModalOrder onHandleCloseModal={handleCloseModal} />
                )}
                <Header onHandleOpenModal={handleOpenModal} />
                <Hero />
                <Menu />
            </div>
        </div>
    );
};

export default App;

import Header from "./components/header/Header";
import "./appStyle.css";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";

const App = () => {
    return (
        <div className="app">
            <div className="app-container">
                <Header />
                <Hero />
                <Menu />
            </div>
        </div>
    );
};

export default App;

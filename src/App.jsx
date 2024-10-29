import "./App.css";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import NavCurtain from "./components/NavCurtain/NavCurtain";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
    return (
        <>
            <Loading />
            <div className="wrapper">
                <Header />
                <BurgerBtn />
                <NavCurtain />
                <Home />
                <AboutUs />
                <Products />
                <Contacts />
                <Footer />
                <ToTopBtn />
            </div>
        </>
    );
}

export default App;

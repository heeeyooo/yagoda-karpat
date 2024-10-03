import { productsData } from "../../data/productsData";
import "./NavCurtain.css";

const NavCurtain = () => {
    addEventListener("scroll", () => {
        const links1 = document.querySelector(".home");
        const links2 = document.querySelector(".about");
        const links3 = document.querySelector(".products");
        const links4 = document.querySelector(".contacts");
        if (
            document.querySelector("#section1").getBoundingClientRect().bottom >
            200
        ) {
            links1.classList.add("active-link");
            links2.classList.remove("active-link");
            links3.classList.remove("active-link");
            links4.classList.remove("active-link");
        } else if (
            document.querySelector("#section2").getBoundingClientRect().bottom >
            200
        ) {
            links1.classList.remove("active-link");
            links2.classList.add("active-link");
            links3.classList.remove("active-link");
            links4.classList.remove("active-link");
        } else if (
            document.querySelector("#section3").getBoundingClientRect().bottom >
            200
        ) {
            links1.classList.remove("active-link");
            links2.classList.remove("active-link");
            links3.classList.add("active-link");
            links4.classList.remove("active-link");
        } else if (
            document.querySelector("#section4").getBoundingClientRect().bottom >
            200
        ) {
            links1.classList.remove("active-link");
            links2.classList.remove("active-link");
            links3.classList.remove("active-link");
            links4.classList.add("active-link");
        }
    });
    function closeMenu() {
        const menu = document.querySelector(".menu");
        document
            .querySelector(".burger-btn")
            .classList.remove("burger-btn--active");
        document
            .querySelector(".burger-btn__line")
            .classList.remove("burger-btn__line--active");
        menu.classList.remove("menu--active");
        document.querySelector("#home").classList.remove("home--active");
        document.querySelector("#about").classList.remove("about--active");
        document
            .querySelector("#products")
            .classList.remove("products--active");
        document
            .querySelector("#contacts")
            .classList.remove("contacts--active");
        document.querySelector(".curtain").classList.remove("curtain--active");
    }

    function showProducts() {
        document
            .querySelector(".dropdown-content")
            .classList.toggle("set-height-content");
        document
            .querySelector(".products-btn")
            .classList.toggle("products-btn--active");
    }

    const blurLink = () => {
        const menuBtn = document.querySelector(".menu");

        document
            .querySelector(".burger-btn")
            .classList.remove("burger-btn--active");
        document
            .querySelector(".burger-btn__line")
            .classList.remove("burger-btn__line--active");
        menuBtn.classList.remove("menu--active");
        document.querySelector("#home").classList.remove("home--active");
        document.querySelector("#about").classList.remove("about--active");
        document
            .querySelector("#products")
            .classList.remove("products--active");
        document
            .querySelector("#contacts")
            .classList.remove("contacts--active");
        document.querySelector(".curtain").classList.remove("curtain--active");
    };

    const blurMiniLink = () => {
        const menuBtn = document.querySelector(".menu");
        document
            .querySelector(".burger-btn")
            .classList.remove("burger-btn--active");
        document
            .querySelector(".burger-btn__line")
            .classList.remove("burger-btn__line--active");
        menuBtn.classList.remove("menu--active");

        document.querySelector("#home").classList.remove("home--active");
        document.querySelector("#about").classList.remove("about--active");
        document
            .querySelector("#products")
            .classList.remove("products--active");
        document
            .querySelector("#contacts")
            .classList.remove("contacts--active");
        document.querySelector(".curtain").classList.remove("curtain--active");
    };

    return (
        <>
            <div className="curtain" onClick={closeMenu}></div>
            <div className="menu">
                <ul className="menu-link">
                    <li id="home">
                        <a
                            className="home link active-link"
                            onClick={blurLink}
                            href="#section1"
                        >
                            Home
                        </a>
                    </li>
                    <li id="about">
                        <a
                            className="about link"
                            onClick={blurLink}
                            href="#section2"
                        >
                            About us
                        </a>
                    </li>
                    <li id="products" className="dropdown">
                        <a
                            className="products link"
                            onClick={blurLink}
                            href="#section3"
                        >
                            Products
                        </a>
                        <button className="products-btn" onClick={showProducts}>
                            <i className="fa-solid fa-arrow-down"></i>
                        </button>
                        <ul className="dropdown-content">
                            {productsData.map(({ id, title }) => {
                                return (
                                    <li key={id}>
                                        <a
                                            className="mini-link"
                                            onClick={blurMiniLink}
                                            href={"#" + id}
                                        >
                                            {title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <li id="contacts">
                        <a
                            className="contacts link"
                            onClick={blurLink}
                            href="#section4"
                        >
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavCurtain;

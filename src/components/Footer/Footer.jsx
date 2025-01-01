import "./Footer.css";
import organicImg from "./img/certificates/organic-logo.jpg";

const Footer = () => {
    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    };

    function expandFooterList(container, btn) {
        document
            .querySelector(container)
            .classList.toggle("grid-container--expand");
        document
            .querySelector(btn)
            .classList.toggle("footer__expand-btn--active");
    }

    return (
        <footer className="footer">
            <button
                title="Scroll to top"
                className="to-top-btn"
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
            <a className="footer-logo" href="#section1">
                Yagoda Karpat
            </a>
            <div>
                <p className="certificate-info">Our certifications</p>
                <img className="certificate-img" src={organicImg} alt="" />
            </div>
            <hr />
            <div className="footer-nav-container">
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name f-navigation">
                            Navigation
                        </p>
                        <button
                            className="footer__expand-btn1"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container1",
                                    ".footer__expand-btn1"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container1">
                        <ul className="footer-link js-footer__list1">
                            <li>
                                <a className="f-home" href="#section1">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="f-about" href="#section2">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a className="f-products" href="#section3">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a className="f-contacts" href="#section4">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-berries">Berries</p>
                        <button
                            className="footer__expand-btn2"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container2",
                                    ".footer__expand-btn2"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container2">
                        <ul className="footer-link">
                            <li>
                                <a href="#bilberry">Bilberry</a>
                            </li>
                            <li>
                                <a href="#lingonberry">Lingonberry</a>
                            </li>
                            <li>
                                <a href="#rosehip">Rosehip</a>
                            </li>
                            <li>
                                <a href="#elderberry">Elderberry</a>
                            </li>
                            <li>
                                <a href="#strawberry">Strawberry</a>
                            </li>
                            <li>
                                <a href="#raspberry">Raspberry</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-fruits">Fruits</p>
                        <button
                            className="footer__expand-btn3"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container3",
                                    ".footer__expand-btn3"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container3">
                        <ul className="footer-link">
                            <li>
                                <a href="#plum">Plum</a>
                            </li>
                            <li>
                                <a href="#apricot">Apricot</a>
                            </li>
                            <li>
                                <a href="#sour-cherry">Sour Cherry</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-vegetables">
                            Vegetables
                        </p>
                        <button
                            className="footer__expand-btn4"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container4",
                                    ".footer__expand-btn4"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container4">
                        <ul className="footer-link">
                            <li>
                                <a href="#sweet-pepper">Sweet pepper</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-mushrooms">Mushrooms</p>
                        <button
                            className="footer__expand-btn5"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container5",
                                    ".footer__expand-btn5"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container5">
                        <ul className="footer-link">
                            <li>
                                <a href="#boletus">Boletus</a>
                            </li>
                            <li>
                                <a href="#chanterelle">Chanterelle</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
            </div>
            <div className="footer__rights-creator">
                <p className="rights">© 2024 Yagoda Karpat</p>
                <p className="creator">
                    Made with <i class="fa-regular fa-heart"></i> by{" "}
                    <a
                        href="https://stepandordiai.netlify.app/"
                        target="_blank"
                    >
                        Stepan Dordiai
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

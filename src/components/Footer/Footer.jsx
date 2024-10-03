import "./Footer.css";
import organicImg from "./img/certificates/organic-logo.jpg";

const Footer = () => {
    return (
        <footer className="footer">
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
                    <p className="footer-nav-name f-navigation">Navigation</p>
                    <ul className="footer-link">
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
                <hr className="extra-hr" />
                <div>
                    <p className="footer-nav-name m-berries">Berries</p>
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
                <hr className="extra-hr" />
                <div>
                    <p className="footer-nav-name m-fruits">Fruits</p>
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
                <hr className="extra-hr" />
                <div>
                    <p className="footer-nav-name m-vegetables">Vegetables</p>
                    <ul className="footer-link">
                        <li>
                            <a href="#sweet-pepper">Sweet pepper</a>
                        </li>
                    </ul>
                </div>
                <hr className="extra-hr" />
                <div>
                    <p className="footer-nav-name m-mushrooms">Mushrooms</p>
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
            <div className="creator">
                <p className="rights">
                    © Yagoda Karpat 2024 | Made with{" "}
                    <i class="fa-regular fa-heart"></i> by{" "}
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

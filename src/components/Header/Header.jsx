import "./Header.css";

const Header = () => {
    let lastScrollTop = 0;
    addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            document.querySelector(".header").classList.add("header--hide");
            document.querySelector(".burger-btn").classList.add("header--hide");
        } else {
            document.querySelector(".header").classList.remove("header--hide");
            document
                .querySelector(".burger-btn")
                .classList.remove("header--hide");
        }
        lastScrollTop = scrollTop;
    });
    return (
        <header className="header">
            <a className="header__logo" href="#section1">
                Yagoda Karpat
            </a>
            <form action="tel:+380968065513">
                <input
                    className="header-tel"
                    type="submit"
                    value="+380968065513"
                />
            </form>
        </header>
    );
};

export default Header;

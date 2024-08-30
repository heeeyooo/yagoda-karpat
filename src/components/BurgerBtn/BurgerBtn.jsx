import "./BurgerBtn.css";

const BurgerBtn = () => {
  function setNav() {
    const burgerBtn = document.querySelector(".burger-btn");
    const midLine = document.querySelector(".burger-btn__line");
    const mobileMenu = document.querySelector(".menu");
    burgerBtn.classList.toggle("burger-btn--active");
    midLine.classList.toggle("burger-btn__line--active");
    mobileMenu.classList.toggle("menu--active");
    document.querySelector("#home").classList.toggle("home--active");
    document.querySelector("#about").classList.toggle("about--active");
    document.querySelector("#products").classList.toggle("products--active");
    document.querySelector("#contacts").classList.toggle("contacts--active");
    document.querySelector(".curtain").classList.toggle("curtain--active");
  }
  return (
    <div onClick={setNav} className="burger-btn">
      <div className="burger-btn__line"></div>
    </div>
  );
};

export default BurgerBtn;

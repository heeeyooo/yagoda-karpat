import "./ToTopBtn.css";

const ToTopBtn = () => {
  addEventListener("scroll", () => {
    const toTopBtn = document.querySelector(".to-top-btn");
    if (document.documentElement.scrollTop > 500) {
      toTopBtn.classList.add("to-top-btn--active");
    } else {
      toTopBtn.classList.remove("to-top-btn--active");
    }
  });
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <button className="to-top-btn" onClick={scrollToTop}>
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ToTopBtn;

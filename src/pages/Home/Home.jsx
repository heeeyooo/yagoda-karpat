import "./Home.css";
import bilberryIcon from "/img/icons/bilberry-icon.png";
import lingonberryIcon from "/img/icons/lingonberry-icon.png";
import elderberryIcon from "/img/icons/elderberry-icon.png";
import raspberryIcon from "/img/icons/raspberry-icon.png";
import strawberryIcon from "/img/icons/strawberry-icon.png";
import plumIcon from "/img/icons/plum-icon.png";
import boletusIcon from "/img/icons/boletus-icon.png";
import chanterelleIcon from "/img/icons/chanterelle-icon.png";
import rosehipIcon from "/img/icons/rosehip-icon.png";
import sweetPepperIcon from "/img/icons/sweet-pepper.png";
import apricotIcon from "/img/icons/apricot-icon.png";

const Home = () => {
  return (
    <div className="home-container" id="section1">
      <div className="home-container__wrapper">
        <h1 className="home-main-info">
          Frozen and dried food wholesale manufacturer
        </h1>
        <p className="home-info">
          We produce frozen (and dried on demand) berries, fruits, mushrooms and
          vegetables
        </p>
        <div className="contact-us-btn-container">
          <a className="contact-us-btn" href="#section4">
            Contact us <pre> </pre>
            <i className="fa-solid fa-arrow-right-long arrow-btn"></i>
          </a>
        </div>
      </div>
      <div className="home-container__product-wrapper">
        <a href="#bilberry">
          <img src={bilberryIcon} alt="" />
        </a>
        <a href="#lingonberry">
          <img src={lingonberryIcon} alt="" />
        </a>
        <a href="#elderberry">
          <img src={elderberryIcon} alt="" />
        </a>
        <a href="#rosehip">
          <img src={rosehipIcon} alt="" />
        </a>
        <a href="#strawberry">
          <img src={strawberryIcon} alt="" />
        </a>
        <a href="#raspberry">
          <img src={raspberryIcon} alt="" />
        </a>
        <a href="#plum">
          <img src={plumIcon} alt="" />
        </a>
        <a href="#sweet-pepper">
          <img src={sweetPepperIcon} alt="" />
        </a>
        <a href="#boletus">
          <img src={boletusIcon} alt="" />
        </a>
        <a href="#chanterelle">
          <img src={chanterelleIcon} alt="" />
        </a>
        <a href="#apricot">
          <img src={apricotIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;

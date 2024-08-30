import "./AboutUs.css";
import map from "/ukraine.svg";

const AboutUs = () => {
  return (
    <div className="about-container" id="section2">
      <h3 className="about-main-info">About us</h3>
      <p className="about-info">
        The Yagoda Karpat company specializes in processing and manufacturing
        frozen and dried berries, fruits, mushrooms and vegetables.
      </p>
      <img className="ukraine-map" src={map} alt="map" />
    </div>
  );
};

export default AboutUs;

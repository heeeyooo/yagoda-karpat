// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "./Product.css";

// import required modules
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";

const Product = ({ product }) => {
  const {
    id,
    productContainer,
    classProduct,
    title,
    info,
    pack,
    temp,
    origin,
    img,
    classSwiper,
    infoContainer,
  } = product;

  addEventListener("scroll", () => {
    const slider = document.querySelectorAll(".my-swiper");
    slider.forEach((slide) => {
      if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
        slide.classList.add("active");
      }
    });
    const productInfo = document.querySelectorAll(".product-info-container");
    productInfo.forEach((product) => {
      if (window.innerHeight > product.getBoundingClientRect().top + 200) {
        product.classList.add("active");
      }
    });
    const slider1 = document.querySelectorAll(".my-swiper-1");
    slider1.forEach((slide) => {
      if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
        slide.classList.add("active");
      }
    });
    const productInfo1 = document.querySelectorAll(".product-info-container-1");
    productInfo1.forEach((product) => {
      if (window.innerHeight > product.getBoundingClientRect().top + 200) {
        product.classList.add("active");
      }
    });
  });

  return (
    <>
      <div id={id} className={productContainer}>
        <div className={infoContainer}>
          <a href={`#${id}`} className={`product-name ${classProduct}`}>
            {title}
          </a>
          <p className="product-info">{info}</p>
          <ul className="product-list-info">
            <li className="pack">{pack}</li>
            <li className="temp">{temp}</li>
            <li className="origin">{origin}</li>
          </ul>
          <a className="call-us-btn" href="#section4">
            CALL US
          </a>
        </div>
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination, Navigation]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          //
          observer={true}
          observeParents={true}
          //
          className={classSwiper}
        >
          <SwiperSlide>
            <img src={`./img/products/${img}`} alt={title} />
          </SwiperSlide>
          <SwiperSlide>More photos coming soon!</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Product;

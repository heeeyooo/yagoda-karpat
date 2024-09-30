import { useState } from "react";
import Product from "../../components/Product/Product";
import { productsData } from "../../data/productsData";
import "./Products.css";

const Products = () => {
    const [search, setSearch] = useState("");

    addEventListener("keyup", () => {
        const slider = document.querySelectorAll(".my-swiper");
        slider.forEach((slide) => {
            // if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
            slide.classList.add("active");
            // }
        });
        const productInfo = document.querySelectorAll(
            ".product-info-container"
        );
        productInfo.forEach((product) => {
            // if (window.innerHeight > product.getBoundingClientRect().top + 200) {
            product.classList.add("active");
            // }
        });
        const slider1 = document.querySelectorAll(".my-swiper-1");
        slider1.forEach((slide) => {
            // if (window.innerHeight > slide.getBoundingClientRect().top + 200) {
            slide.classList.add("active");
            // }
        });
        const productInfo1 = document.querySelectorAll(
            ".product-info-container-1"
        );
        productInfo1.forEach((product) => {
            // if (window.innerHeight > product.getBoundingClientRect().top + 200) {
            product.classList.add("active");
            // }
        });
    });
    return (
        <div className="products-container" id="section3">
            <h3 className="products-main-info">Our products</h3>
            <p className="products-info">
                We specialise in freshly frozen bilberry, lingonberry, plum,
                strawberry, sourcherry, rosehip and elderberry. All our products
                are grown and harvested exclusively in ecologically clean areas
                of Ukraine
            </p>
            <p className="filter-title">Filter</p>
            <input
                className="search-input"
                type="text"
                placeholder="Product"
                onChange={(e) => setSearch(e.target.value)}
            />
            {productsData
                .filter((item) => {
                    return search.toLowerCase() === ""
                        ? item
                        : item.title
                              .toLowerCase()
                              .startsWith(search.toLowerCase());
                })
                .map((product) => {
                    return <Product product={product} key={product.id} />;
                })}
        </div>
    );
};

export default Products;

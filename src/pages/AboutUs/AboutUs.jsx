import { useEffect } from "react";
import "./AboutUs.css";
import map from "/ukraine.svg";

const AboutUs = () => {
    useEffect(() => {
        addEventListener("scroll", () => {
            if (
                document.getElementById("years").getBoundingClientRect().top <
                window.innerHeight
            ) {
                closureYears("years", 15);
            }
            if (
                document.getElementById("products-js").getBoundingClientRect()
                    .top < window.innerHeight
            ) {
                closureYears1("products-js", 14);
            }
            if (
                document.getElementById("amount").getBoundingClientRect().top <
                window.innerHeight
            ) {
                closureYears2("amount");
            }
        });
    }, []);

    let started = false;
    function closureYears(param, quantity) {
        if (!started) {
            let score = 0;
            let id = setInterval(closureInner, 100);
            function closureInner() {
                if (score === quantity) {
                    clearInterval(id);
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started = true;
    }

    let started1 = false;

    function closureYears1(param, quantity) {
        if (!started1) {
            let score = 0;
            let id = setInterval(closureInner, 100);
            function closureInner() {
                if (score === quantity) {
                    clearInterval(id);
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started1 = true;
    }

    let started2 = false;

    function closureYears2(param) {
        if (!started2) {
            let score = 0;
            let id = setInterval(closureInner, 10);
            function closureInner() {
                if (score === 350) {
                    clearInterval(id);
                    let id2 = setInterval(closureInner2, 50);
                    function closureInner2() {
                        if (score === 400) {
                            clearInterval(id2);
                        } else {
                            score++;
                            document.getElementById(param).innerHTML = score;
                        }
                    }
                } else {
                    score++;
                    document.getElementById(param).innerHTML = score;
                }
            }
        }

        started2 = true;
    }
    return (
        <div className="about-container" id="section2">
            <h3 className="about-main-info">About us</h3>
            <p className="about-info">
                The Yagoda Karpat company specializes in processing and
                manufacturing frozen and dried berries, fruits, mushrooms and
                vegetables.
            </p>
            <img className="ukraine-map" src={map} alt="map" />
            <div className="contacts-grid-container">
                <div>
                    <span id="years">0</span>
                    <p>Years of expierence</p>
                </div>
                <div>
                    <span id="products-js">0</span>
                    <p>Products</p>
                </div>
                <div>
                    <span id="amount">0</span>
                    <p>Amount of proceding in season</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

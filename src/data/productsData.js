import bilberryImg from "./products-img/bilberry.jpg";
import bilberryImg2 from "./products-img/bilberry2.jpg";
import lingonberryImg from "./products-img/lingonberry.jpg";
import lingonberryImg2 from "./products-img/lingonberry2.jpg";
import rosehipImg from "./products-img/rosehip.jpg";
import rosehipImg2 from "./products-img/rosehip2.jpg";
import elderberryImg from "./products-img/elderberry.png";
import strawberryImg from "./products-img/strawberry.jpg";
import strawberryImg2 from "./products-img/strawberry2.jpg";
import raspberryImg from "./products-img/raspberry.jpg";
import raspberryImg2 from "./products-img/raspberry2.jpg";
import raspberryImg3 from "./products-img/raspberry3.jpg";
import plumImg from "./products-img/plum.jpg";
import plumImg2 from "./products-img/plum2.jpg";
import apricotImg from "./products-img/apricot.jpg";
import sweetPepperImg from "./products-img/sweet-pepper.jpg";
import sweetPepperImg2 from "./products-img/sweet-pepper2.jpg";
import sweetPepperImg3 from "./products-img/sweet-pepper3.jpg";
import sweetPepperImg4 from "./products-img/sweet-pepper4.jpg";
import boletusImg from "./products-img/boletus.jpg";
import boletusImg2 from "./products-img/boletus2.jpg";
import boletusImg3 from "./products-img/boletus3.jpg";
import boletusImg4 from "./products-img/boletus4.jpg";
import boletusImg5 from "./products-img/boletus5.jpg";
import chanterelleImg from "./products-img/chanterelle.jpg";
import chanterelleImg2 from "./products-img/chanterelle2.jpg";
import sourCherryImg from "./products-img/sour-cherry.jpg";
import sourCherryImg2 from "./products-img/sour-cherry2.jpg";
import honeyFungusImg from "./products-img/honey-fungus.jpg";
import honeyFungusImg2 from "./products-img/honey-fungus2.jpg";
import blackberryImg from "./products-img/blackberry.jpg";

const productsData = [
    {
        id: "bilberry",
        productContainer: "product-container",
        title: "Bilberry",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 25 kg paper bag",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [bilberryImg, bilberryImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "lingonberry",
        productContainer: "product-container1",
        title: "Lingonberry",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 25 kg paper bag",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [lingonberryImg, lingonberryImg2],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "rosehip",
        productContainer: "product-container",
        title: "Rosehip",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 25 kg paper bag",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [rosehipImg, rosehipImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "elderberry",
        productContainer: "product-container1",
        title: "Elderberry",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 25 kg paper bag",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [elderberryImg],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "strawberry",
        productContainer: "product-container",
        title: "Strawberry",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 25 kg paper bag",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [strawberryImg, strawberryImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "raspberry",
        productContainer: "product-container1",
        title: "Raspberry",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 10 kg carton box",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [raspberryImg2, raspberryImg, raspberryImg3],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "plum",
        productContainer: "product-container",
        title: "Plum",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 25 kg paper bag, 10kg carton box",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [plumImg, plumImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "apricot",
        productContainer: "product-container1",
        title: "Apricot",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?",
        pack: "Packaging: 10 kg carton box",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [apricotImg],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "sweet-pepper",
        productContainer: "product-container",
        title: "Sweet Pepper",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 10 kg carton box",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [
            sweetPepperImg,
            sweetPepperImg2,
            sweetPepperImg3,
            sweetPepperImg4,
        ],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "boletus",
        productContainer: "product-container1",
        title: "Boletus",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 10 kg carton box",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [
            boletusImg,
            boletusImg2,
            boletusImg3,
            boletusImg4,
            boletusImg5,
        ],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "chanterelle",
        productContainer: "product-container",
        title: "Chanterelle",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 10 kg carton box",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [chanterelleImg, chanterelleImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "sour-cherry",
        productContainer: "product-container1",
        title: "Sour Cherry",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: 10kg carton box",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [sourCherryImg, sourCherryImg2],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "honey-fungus",
        productContainer: "product-container",
        title: "Honey Fungus",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: ---",
        temp: "Temperature: -21 °C, dried",
        origin: "Origin: Ukraine",
        productImages: [honeyFungusImg, honeyFungusImg2],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container",
    },
    {
        id: "blackberry",
        productContainer: "product-container1",
        title: "Blackberry",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "Packaging: ---",
        temp: "Temperature: -21 °C",
        origin: "Origin: Ukraine",
        productImages: [blackberryImg],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
];

export { productsData };

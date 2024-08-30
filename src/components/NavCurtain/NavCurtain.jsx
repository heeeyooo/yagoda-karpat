import "./NavCurtain.css";

const NavCurtain = () => {
  addEventListener("scroll", () => {
    const links1 = document.querySelector(".home");
    const links2 = document.querySelector(".about");
    const links3 = document.querySelector(".products");
    const links4 = document.querySelector(".contacts");
    if (
      document.querySelector("#section1").getBoundingClientRect().bottom > 200
    ) {
      links1.classList.add("active-link");
      links2.classList.remove("active-link");
      links3.classList.remove("active-link");
      links4.classList.remove("active-link");
    } else if (
      document.querySelector("#section2").getBoundingClientRect().bottom > 200
    ) {
      links1.classList.remove("active-link");
      links2.classList.add("active-link");
      links3.classList.remove("active-link");
      links4.classList.remove("active-link");
    } else if (
      document.querySelector("#section3").getBoundingClientRect().bottom > 200
    ) {
      links1.classList.remove("active-link");
      links2.classList.remove("active-link");
      links3.classList.add("active-link");
      links4.classList.remove("active-link");
    } else if (
      document.querySelector("#section4").getBoundingClientRect().bottom > 200
    ) {
      links1.classList.remove("active-link");
      links2.classList.remove("active-link");
      links3.classList.remove("active-link");
      links4.classList.add("active-link");
    }
  });
  function closeMenu() {
    const menu = document.querySelector(".menu");
    document
      .querySelector(".burger-btn")
      .classList.remove("burger-btn--active");
    document
      .querySelector(".burger-btn__line")
      .classList.remove("burger-btn__line--active");
    menu.classList.remove("menu--active");
    document.querySelector("#home").classList.remove("home--active");
    document.querySelector("#about").classList.remove("about--active");
    document.querySelector("#products").classList.remove("products--active");
    document.querySelector("#contacts").classList.remove("contacts--active");
    document.querySelector(".curtain").classList.remove("curtain--active");
  }

  function showProducts() {
    document
      .querySelector(".dropdown-content")
      .classList.toggle("set-height-content");
    document
      .querySelector(".products-btn")
      .classList.toggle("products-btn--active");
  }

  const blurLink = () => {
    const menuBtn = document.querySelector(".menu");

    document
      .querySelector(".burger-btn")
      .classList.remove("burger-btn--active");
    document
      .querySelector(".burger-btn__line")
      .classList.remove("burger-btn__line--active");
    menuBtn.classList.remove("menu--active");
    document.querySelector("#home").classList.remove("home--active");
    document.querySelector("#about").classList.remove("about--active");
    document.querySelector("#products").classList.remove("products--active");
    document.querySelector("#contacts").classList.remove("contacts--active");
    document.querySelector(".curtain").classList.remove("curtain--active");
  };

  const blurMiniLink = () => {
    const menuBtn = document.querySelector(".menu");
    document
      .querySelector(".burger-btn")
      .classList.remove("burger-btn--active");
    document
      .querySelector(".burger-btn__line")
      .classList.remove("burger-btn__line--active");
    menuBtn.classList.remove("menu--active");

    document.querySelector("#home").classList.remove("home--active");
    document.querySelector("#about").classList.remove("about--active");
    document.querySelector("#products").classList.remove("products--active");
    document.querySelector("#contacts").classList.remove("contacts--active");
    document.querySelector(".curtain").classList.remove("curtain--active");
  };

  // TRANSLATE TO UA

  const changeToUa = () => {
    const links1 = document.querySelector(".home");
    const links2 = document.querySelector(".about");
    const links3 = document.querySelector(".products");
    const links4 = document.querySelector(".contacts");
    document.querySelector(".ua").classList.add("active-lang");
    document.querySelector(".en").classList.remove("active-lang");
    // MENU
    links1.innerHTML = "Головна";
    links2.innerHTML = "Про нас";
    links3.innerHTML = "Продукти";
    links4.innerHTML = "Контакти";
    // PRODUCTS
    document.querySelectorAll(".m-berries").forEach((el) => {
      el.innerHTML = "Ягоди";
    });
    document.querySelectorAll(".m-fruits").forEach((el) => {
      el.innerHTML = "Фрукти";
    });
    document.querySelectorAll(".m-vegetables").forEach((el) => {
      el.innerHTML = "Овочі";
    });
    document.querySelectorAll(".m-mushrooms").forEach((el) => {
      el.innerHTML = "Гриби";
    });

    document.querySelector(".home-main-info").innerHTML =
      "Оптовий виробник заморожених і сушених продуктів";
    document.querySelector(".home-info").innerHTML =
      "Ми виробляємо заморожені (та сушені на замовлення) ягоди, фрукти, гриби та овочі";
    // CALL US BTN
    document.querySelectorAll(".contact-us-btn").forEach((el) => {
      el.innerHTML = `Зв'яжіться з нами`;
    });
    // ABOUT US
    document.querySelector(".about-main-info").innerHTML = "Про нас";
    document.querySelector(".about-info").innerHTML =
      "Компанія «Ягода Карпат» спеціалізується на переробці та виробництві заморожених та сушених ягід, фруктів, грибів та овочів.";
    //PRODUCTS
    document.querySelector(".products-main-info").innerHTML = "Продукти";
    document.querySelector(".products-info").innerHTML =
      "Ми спеціалізуємося на свіжозамороженій чорниці, брусниці, сливі, полуниці, вишні, шипшині та бузині. Вся наша продукція вирощена та зібрана виключно в екологічно чистих районах України";

    document.querySelector(".bilberry").innerHTML = "Чорниця";
    document.querySelector(".bilberry-product").innerHTML = "Чорниця";

    document.querySelector(".lingonberry").innerHTML = "Брусниця";
    document.querySelector(".lingonberry-product").innerHTML = "Брусниця";

    document.querySelector(".rosehip").innerHTML = "Шипшина";
    document.querySelector(".rosehip-product").innerHTML = "Шипшина";

    document.querySelector(".elderberry").innerHTML = "Бузина";
    document.querySelector(".elderberry-product").innerHTML = "Бузина";

    document.querySelector(".strawberry").innerHTML = "Полуниця";
    document.querySelector(".strawberry-product").innerHTML = "Полуниця";

    document.querySelector(".raspberry").innerHTML = "Малина";
    document.querySelector(".raspberry-product").innerHTML = "Малина";

    document.querySelector(".plum").innerHTML = "Слива";
    document.querySelector(".plum-product").innerHTML = "Слива";

    document.querySelector(".apricot").innerHTML = "Абрикос";
    document.querySelector(".apricot-product").innerHTML = "Абрикос";

    document.querySelector(".sweet-pepper").innerHTML = "Перець солодкий";
    document.querySelector(".sweet-pepper-product").innerHTML =
      "Перець солодкий";

    document.querySelector(".boletus").innerHTML = "Гриб білий";
    document.querySelector(".boletus-product").innerHTML = "Гриб білий";

    document.querySelector(".chanterelle").innerHTML = "Гриб лисичка";
    document.querySelector(".chanterelle-product").innerHTML = "Гриб лисичка";

    document.querySelectorAll(".pack").forEach((el) => {
      el.innerHTML = "Пакування: паперовий мішок 25 кг";
    });
    document.querySelectorAll(".temp").forEach((el) => {
      el.innerHTML = "Температура: -21 °C";
    });
    document.querySelectorAll(".origin").forEach((el) => {
      el.innerHTML = "Походження: Україна";
    });
    //CONTACTS

    document.querySelector(".contacts-main-info").innerHTML = "Контакти";
    document.querySelector(
      ".c-address"
    ).innerHTML = `вулиця Центральна, 34Б<br>Тячівський район<br>Закарпатська область<br>Україна`;
    document.querySelector(".form-info").innerHTML = "напишіть нам";

    document.querySelector(".label1").innerHTML = "Ім'я";
    document.querySelector(".label2").innerHTML = "Прізвище";
    document.querySelector(".label3").innerHTML = "Телефон";
    document.querySelector(".label4").innerHTML = "Повідомлення";
    //FOOTER
    document.querySelector(".f-navigation").innerHTML = "Навігація";

    document.querySelector(".f-home").innerHTML = "Головна";
    document.querySelector(".f-about").innerHTML = "Про нас";
    document.querySelector(".f-products").innerHTML = "Продукти";
    document.querySelector(".f-contacts").innerHTML = "Контакти";
    document.querySelector(".certificate-info").innerHTML = "Наші сертифікати";
  };

  const changeToEn = () => {
    const links1 = document.querySelector(".home");
    const links2 = document.querySelector(".about");
    const links3 = document.querySelector(".products");
    const links4 = document.querySelector(".contacts");
    document.querySelector(".ua").classList.remove("active-lang");
    document.querySelector(".en").classList.add("active-lang");
    // MENU
    links1.innerHTML = "Home";
    links2.innerHTML = "About us";
    links3.innerHTML = "Products";
    links4.innerHTML = "Contacts";
    // PRODUCTS
    document.querySelectorAll(".m-berries").forEach((el) => {
      el.innerHTML = "Berries";
    });
    document.querySelectorAll(".m-fruits").forEach((el) => {
      el.innerHTML = "Fruits";
    });
    document.querySelectorAll(".m-vegetables").forEach((el) => {
      el.innerHTML = "Vegetables";
    });
    document.querySelectorAll(".m-mushrooms").forEach((el) => {
      el.innerHTML = "Mushrooms";
    });
    // HOME
    document.querySelector(".home-main-info").innerHTML =
      "Frozen and dried food wholesale manufacturer";
    document.querySelector(".home-info").innerHTML =
      "We produce frozen (and dried on demand) berries, fruits, mushrooms and vegetables";
    // CALL US BTN
    document.querySelectorAll(".contact-us-btn").forEach((el) => {
      el.innerHTML = "Contact us";
    });
    // ABOUT US
    document.querySelector(".about-main-info").innerHTML = "About us";
    document.querySelector(".about-info").innerHTML =
      "The Yagoda Karpat company specializes in processing and manufacturing frozen and dried berries, fruits, mushrooms and vegetables.";
    // OUR PRODUCTS
    document.querySelector(".products-main-info").innerHTML = "Products";
    document.querySelector(".products-info").innerHTML =
      "We specialise in freshly frozen bilberry, lingonberry, plum, strawberry, sourcherry, rosehip and elderberry. All our products are grown and harvested exclusively in ecologically clean areas of Ukraine";
    document.querySelector(".bilberry").innerHTML = "Bilberry";
    document.querySelector(".bilberry-product").innerHTML = "Bilberry";

    document.querySelector(".lingonberry").innerHTML = "Lingonberry";
    document.querySelector(".lingonberry-product").innerHTML = "Lingonberry";

    document.querySelector(".rosehip").innerHTML = "Rosehip";
    document.querySelector(".rosehip-product").innerHTML = "Rosehip";

    document.querySelector(".elderberry").innerHTML = "Elderberry";
    document.querySelector(".elderberry-product").innerHTML = "Elderberry";

    document.querySelector(".strawberry").innerHTML = "Strawberry";
    document.querySelector(".strawberry-product").innerHTML = "Strawberry";

    document.querySelector(".raspberry").innerHTML = "Raspberry";
    document.querySelector(".raspberry-product").innerHTML = "Raspberry";

    document.querySelector(".plum").innerHTML = "Plum";
    document.querySelector(".plum-product").innerHTML = "Plum";

    document.querySelector(".apricot").innerHTML = "Apricot";
    document.querySelector(".apricot-product").innerHTML = "Apricot";

    document.querySelector(".sweet-pepper").innerHTML = "Sweet pepper";
    document.querySelector(".sweet-pepper-product").innerHTML = "Sweet pepper";

    document.querySelector(".boletus").innerHTML = "Boletus";
    document.querySelector(".boletus-product").innerHTML = "Boletus";

    document.querySelector(".chanterelle").innerHTML = "Chanterelle";
    document.querySelector(".chanterelle-product").innerHTML = "Chanterelle";
    document.querySelectorAll(".pack").forEach((el) => {
      el.innerHTML = "Packaging: 25 kg paper bag";
    });
    document.querySelectorAll(".temp").forEach((el) => {
      el.innerHTML = "Temperature: -21 °C";
    });
    document.querySelectorAll(".origin").forEach((el) => {
      el.innerHTML = "Origin: Ukraine";
    });
    // CONTACTS
    document.querySelector(".contacts-main-info").innerHTML = "Contacts";
    document.querySelector(".c-address").innerHTML =
      "Central street, 34B<br>Tyachiv district<br>Transcarpathian region<br>Ukraine";
    document.querySelector(".form-info").innerHTML = "contact us";
    document.querySelector(".label1").innerHTML = "First Name";
    document.querySelector(".label2").innerHTML = "Last Name";
    document.querySelector(".label3").innerHTML = "Phone Number";
    document.querySelector(".label4").innerHTML = "Message";
    // FOOTER
    document.querySelector(".f-navigation").innerHTML = "Navigation";

    document.querySelector(".f-home").innerHTML = "Home";
    document.querySelector(".f-about").innerHTML = "About us";
    document.querySelector(".f-products").innerHTML = "Products";
    document.querySelector(".f-contacts").innerHTML = "Contacts";
    document.querySelector(".certificate-info").innerHTML = "Our certificates";
  };

  return (
    <>
      <div className="curtain" onClick={closeMenu}></div>
      <div className="menu">
        <ul className="menu-link">
          <li id="home">
            <a
              className="home link active-link"
              onClick={blurLink}
              href="#section1"
            >
              Home
            </a>
          </li>
          <li id="about">
            <a className="about link" onClick={blurLink} href="#section2">
              About us
            </a>
          </li>
          <li id="products" className="dropdown">
            <a className="products link" onClick={blurLink} href="#section3">
              Products
            </a>
            <button className="products-btn" onClick={showProducts}>
              <i className="fa-solid fa-arrow-down"></i>
            </button>
            <ul className="dropdown-content">
              <li>
                <a
                  className="mini-link m-berries"
                  onClick={blurMiniLink}
                  href="#bilberry"
                >
                  Berries
                </a>
              </li>
              <li>
                <a
                  className="mini-link m-fruits"
                  onClick={blurMiniLink}
                  href="#plum"
                >
                  Fruits
                </a>
              </li>
              <li>
                <a
                  className="mini-link m-vegetables"
                  onClick={blurMiniLink}
                  href="#sweet-pepper"
                >
                  Vegetables
                </a>
              </li>
              <li>
                <a
                  className="mini-link m-mushrooms"
                  onClick={blurMiniLink}
                  href="#boletus"
                >
                  Mushrooms
                </a>
              </li>
            </ul>
          </li>
          <li id="contacts">
            <a className="contacts link" onClick={blurLink} href="#section4">
              Contacts
            </a>
          </li>
        </ul>
        <div className="lang">
          <button onClick={changeToEn} className="en active-lang">
            EN
          </button>
          <span className="lang-span">|</span>
          <button onClick={changeToUa} className="ua">
            UA
          </button>
        </div>
      </div>
    </>
  );
};

export default NavCurtain;

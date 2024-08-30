import "./Product.css";

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
  } = product;
  return (
    <div id={id} className={productContainer}>
      <div className="product-info-container">
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
      <div className="img-container">
        <img src={`./img/products/${img}`} />
      </div>
    </div>
  );
};

export default Product;

import React from "react";

import "../scss/layout/components/_Product.scss";
import comida from "../images/comida.png";

function Product(props) {
  const product = props.product;
  
  return (
    <div className="Product">
      <div>
        <picture
          className="img"
          src={product.imagen || comida}
          alt="imagen del producto"
        >
          <source srcSet={product.image} />
          <img className="img" srcSet={comida} alt="imagen del producto" />
        </picture>
      </div>
      <div className="Product__info">
        <h4>{product.name}</h4>
        <p>
          <span>Línea:</span> {product.line.name}
        </p>
        <p>
          <span>Tamaño:</span> {product.size}
        </p>
        <p>
          <span>Precio:</span> ${product.price}
        </p>
      </div>
    </div>
  );
}

export default Product;

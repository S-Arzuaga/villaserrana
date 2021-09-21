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
          <source srcSet={product.imagen} />
          <img className="img" srcSet={comida} alt="imagen del producto" />
        </picture>
      </div>
      <div className="Product__info">
        <h4>{product.nombre}</h4>
        <p>
          <span>Línea:</span> {product.linea}
        </p>
        <p>
          <span>Tamaño:</span> {product.size}
        </p>
        <p>
          <span>Precio:</span> ${product.precio}
        </p>
      </div>
    </div>
  );
}

export default Product;

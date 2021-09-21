import React from "react";
import { useHistory } from "react-router-dom";

import "../scss/layout/components/_AdminProduct.scss";

function AdminProduct(props) {
  const history = useHistory();
  const product = props.product;

  return (
    <div className="AdminProduct">
      <img src={product.imagen} alt="imagen del producto" />
      <div className="product_info">
        <h4>{product.nombre}</h4>
        <div>
          <p>
            <strong> Linea:</strong> {product.linea}
          </p>
          <p>
            <strong>Tamaño:</strong> {product.size}
          </p>
          <p>
            <strong>Precio:</strong> {product.precio}
          </p>
          <p>
            <strong>Id:</strong> {product.id}
          </p>
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => history.push(`/UpdateProduct/${product.id}`)}
          className="btn btn-primary"
        >
          Editar
        </button>
        <button
          onClick={() => product.id && props.handleDelete(product.id)}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default AdminProduct;

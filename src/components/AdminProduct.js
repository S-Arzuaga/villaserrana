import React from "react";
import { useHistory } from "react-router-dom";

import "../scss/layout/components/_AdminProduct.scss";

const API_PRODUCTS = "https://aqueous-cove-93793.herokuapp.com/api/v1/products";

function AdminProduct(props) {
  const history = useHistory();
  const product = props.product;
  // const handleDelete = props.handleDelete;

  // const useDeleteProducts2 = useDeleteProducts();

  const handleDelete = function (id) {
    fetch(`${API_PRODUCTS}/${id}`, {
      method: "DELETE",
    }).then((response) =>
      response.json().then((res) => {
        console.log(res);
      })
    );
  };

  return (
    <div className="AdminProduct">
      <img src={product.image} alt="imagen del producto" />
      <div className="product_info">
        <h4>{product.name}</h4>
        <div>
          <p>
            <strong> Linea:</strong> {product.line.name}
          </p>
          <p>
            <strong>Tamaño:</strong> {product.size}
          </p>
          <p>
            <strong>Precio:</strong> {product.price}
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
          onClick={() => handleDelete(product.id)}
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default AdminProduct;

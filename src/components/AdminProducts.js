import React from "react";

import AdminProduct from "./AdminProduct";
import useGetProducts from "../hooks/useGetProducts";

import "../scss/layout/components/_AdminProducts.scss";

const API_PRODUCTS = "https://aqueous-cove-93793.herokuapp.com/api/v1/products";

function Products(props) {
  const getProducts = useGetProducts(API_PRODUCTS);
  console.log(getProducts);

  const lineas = props.lineas;

  return (
    <div className="AdminProducts">
      <div className="AdminProducts__container row">
        {lineas.map((linea) => (
          <div className="adminseccion container ">
            <h2 id={linea.name}>{linea.name}</h2>
            <div className="admin_products">
              {getProducts
                .filter((filteredProduct) =>
                  filteredProduct.line.name.includes(linea.name)
                )
                .map((filteredProduct2) => (
                  <div className="admin_product">
                    <AdminProduct product={filteredProduct2} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

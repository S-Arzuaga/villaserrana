import React from "react";

import * as CompaniesServer from "./CompaniesServer";

import AdminProduct from "./AdminProduct";
import useGetProducts from "../hooks/useGetProducts";
import useDeleteProducts from "../hooks/useDeleteProduct";

import "../scss/layout/components/_AdminProducts.scss";

const API = "http://localhost:4000/api/v1/products";

function Products(props) {
  const getProducts = useGetProducts(API);
  console.log(getProducts);

  useGetProducts(API);

  const lineas = props.lineas;

  // const handleDelete = async (productId) => {
  //   await CompaniesServer.deleteProduct(productId);
  // };

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
                    <AdminProduct
                      product={filteredProduct2}
                      handleDelete={useDeleteProducts}
                    />
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

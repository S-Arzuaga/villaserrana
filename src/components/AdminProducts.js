import React, { useState, useEffect } from "react";

import * as CompaniesServer from "./CompaniesServer";

import AdminProduct from "./AdminProduct";

import "../scss/layout/components/_AdminProducts.scss";

function Products(props) {
  const [products, setProducts] = useState([]);

  const listCompanies = async () => {
    try {
      const res = await CompaniesServer.listCompanies();
      const data = await res.json();
      setProducts(data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCompanies();
  }, []);

  const lineas = props.lineas;

  const handleDelete = async (productId) => {
    await CompaniesServer.deleteProduct(productId);
    listCompanies();
  };

  return (
    <div className="AdminProducts">
      <div className="AdminProducts__container row">
        {lineas.map((linea) => (
          <div className="adminseccion container ">
            <h2 id={linea}>{linea}</h2>
            <div className="admin_products">
              {products
                .filter((product) => product.linea.includes(`${linea}`))
                .map((filteredProduct) => (
                  <div className="admin_product">
                    <AdminProduct
                      product={filteredProduct}
                      handleDelete={handleDelete}
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

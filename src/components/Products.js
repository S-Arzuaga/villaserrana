import React, { useState, useEffect } from "react";

import Product from "./Product";
import * as CompaniesServer from "./CompaniesServer";

import "../scss/layout/components/_Products.scss";

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

  console.log(products);

  useEffect(() => {
    listCompanies();
  }, []);

  const lineas = props.lineas;
  console.log(lineas);

  return (
    <div className="Products">
      <div className="Products__container">
        {lineas.map((linea) => (
          <div className="seccion container">
            <h2 id={linea}>{linea}</h2>
            <div className="products">
              {products
                .filter((product) => product.linea.includes(`${linea}`))
                .map((filteredProduct) => (
                  <div>
                    <Product product={filteredProduct} />
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

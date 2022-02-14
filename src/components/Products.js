import React from "react";

import Product from "./Product";

import "../scss/layout/components/_Products.scss";

import useGetProducts from "../hooks/useGetProducts";

const API_PRODUCTS = "https://aqueous-cove-93793.herokuapp.com/api/v1/products";

function Products(props) {
  const products = useGetProducts(API_PRODUCTS);

  const lineas = props.lineas;

  return (
    <div className="Products">
      <div className="Products__container">
        {lineas.map((linea) => (
          <div className="seccion container" key={linea.id}>
            <h2 id={linea.name} key={linea.id}>{linea.name}</h2>
            <div className="products">
              {products
                .filter((filteredProduct) =>
                  filteredProduct.line.name.includes(linea.name)
                )
                .map((filteredProduct2) => (
                  <div key={filteredProduct2.id}>
                    <Product product={filteredProduct2} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className="Products">
    //   <div className="Products__container">
    //     {lineas.map((linea) => (
    //       <div className="seccion container">
    //         <h2 id={linea}>{linea}</h2>
    //         <div className="products">
    //           {products
    //             .filter((product) => product.linea.includes(`${linea}`))
    //             .map((filteredProduct) => (
    //               <div>
    //                 <Product product={filteredProduct} />
    //               </div>
    //             ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default Products;

import React from "react";

import Products from "../components/Products";
import NavegacionProductos from "../components/NavegacionProductos";

import "../scss/layout/pages/_PerrosComida.scss";
import useLineasContext from "../components/useLineasContext";

function PerrosProductos(props) {
  const lineas = useLineasContext();
  const { productosGatos } = lineas;
  return (
    <div className="PerrosComida">
      <div className="">
        <h1 className="PerrosComida__title">Comida de Perros</h1>
        <div className="main">
          <NavegacionProductos lineas={productosGatos} />
          <div className="PerrosComida_products">
            <Products lineas={productosGatos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerrosProductos;

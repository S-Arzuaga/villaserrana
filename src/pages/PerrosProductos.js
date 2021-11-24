import React from "react";

import Products from "../components/Products";
import NavegacionProductos from "../components/NavegacionProductos";

import "../scss/layout/pages/_PerrosComida.scss";

import useGetLines from "../hooks/useGetLines";

const API_LINES = "http://localhost:4000/api/v1/lines";

function PerrosProductos(props) {
  const res = useGetLines(API_LINES);
  const lines = res.filter((line) => line.categoryId == 2);

  return (
    <div className="PerrosComida">
      <div className="">
        <h1 className="PerrosComida__title">Comida de Perros</h1>
        <div className="main">
          <NavegacionProductos lineas={lines} />
          <div className="PerrosComida_products">
            <Products lineas={lines} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerrosProductos;

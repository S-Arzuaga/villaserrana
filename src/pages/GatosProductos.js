import React from "react";

import Products from "../components/Products";
import NavegacionProductos from "../components/NavegacionProductos";

import "../scss/layout/pages/_PerrosComida.scss";

import useGetLines from "../hooks/useGetLines";

const API_LINES = "https://villaserrana-backend.herokuapp.com/api/v1/lines";

function PerrosProductos(props) {
  const res = useGetLines(API_LINES);
  const lines = res.filter((line) => line.categoryId === 4);
  return (
    <div className="PerrosComida">
      <div className="">
        <h1 className="PerrosComida__title">Productos de Gatos</h1>
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

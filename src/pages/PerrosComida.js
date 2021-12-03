import React, { useEffect, useState } from "react";

import Products from "../components/Products";
import NavegacionProductos from "../components/NavegacionProductos";

import "../scss/layout/pages/_PerrosComida.scss";

import useGetLines from "../hooks/useGetLines";

const API_LINES = "https://aqueous-cove-93793.herokuapp.com/api/v1/lines";

function PerrosComida(props) {
  const res = useGetLines(API_LINES);
  const lines = res.filter((line) => line.categoryId == 1);
  console.log(lines);

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

export default PerrosComida;

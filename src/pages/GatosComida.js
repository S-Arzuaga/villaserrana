import React from "react";

//COMPONENTS
import Products from "../components/Products";
import NavegacionProductos from "../components/NavegacionProductos";

// CSS
import "../scss/layout/pages/_PerrosComida.scss";

// HOOKS
import useGetLines from "../hooks/useGetLines";

// API URL
const API_LINES = "https://villaserrana-backend.herokuapp.com/api/v1/lines";

function GatosComida(props) {
  const res = useGetLines(API_LINES);
  const lines = res.filter((line) => line.categoryId === 3);
  

  return (
    <div className="PerrosComida">
      <div className="">
        <h1 className="PerrosComida__title">Comida de Gatos</h1>
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

export default GatosComida;

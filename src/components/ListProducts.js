import React from "react";
import { Link } from "react-router-dom";

import NavegacionProductos from "../components/NavegacionProductos";
import AdminProducts from "./AdminProducts";

import "../scss/layout/pages/_PerrosComida.scss";
import "../scss/layout/components/_ListProducts.scss";
import useLineasContext from "../components/useLineasContext";

function ListProducts(props) {
  const lineas = useLineasContext();
  const { comidaPerros, comidaGatos, productosPerros, productosGatos } = lineas;

  const handleClick = (e) => {
    const button = e.target;
    console.log(button);
    const padre = button.parentNode;
    console.log(padre);
    const main = padre.lastChild;
    console.log(main);
    main.classList.toggle("display");
  };
  return (
    <div className="ListProducts container">
      <div className="">
        <div className="d-flex gap-4 align-items-center">
          <h1 className="text-center">Lista de Productos</h1>
          <Link
            to="/ProductForm"
            className="btn btn-primary h-25 d-flex align-items-center"
          >
            Crear
          </Link>
        </div>
        <div className="">
          <div className="ListProducts_perros">
            <button onClick={handleClick} className="btn btn-secondary mb-3">
              Comida de Perros
            </button>
            <div id="main1" className="main">
              <div className="ListProducts_perros-div">
                <NavegacionProductos lineas={comidaPerros} />
                <div className="ListProducts_products">
                  <AdminProducts lineas={comidaPerros} />
                </div>
              </div>
            </div>
          </div>
          <div className="ListProducts_gatos">
            <button onClick={handleClick} className="btn btn-secondary mb-3">
              Comida de Gatos
            </button>
            <div id="main" className="main">
              <div className="ListProducts_gatos-div">
                <NavegacionProductos lineas={comidaGatos} />
                <div className="ListProducts_products">
                  <AdminProducts lineas={comidaGatos} />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button onClick={handleClick} className="btn btn-secondary mb-3">
              Productos Perros
            </button>
            <div id="main1" className="main">
              <div className="ListProducts_perros-div">
                <NavegacionProductos lineas={productosPerros} />
                <div className="ListProducts_products">
                  <AdminProducts lineas={productosPerros} />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button onClick={handleClick} className="btn btn-secondary mb-3">
              Productos Perros
            </button>
            <div id="main1" className="main">
              <div className="ListProducts_perros-div">
                <NavegacionProductos lineas={productosGatos} />
                <div className="ListProducts_products">
                  <AdminProducts lineas={productosGatos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;

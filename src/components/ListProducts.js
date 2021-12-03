import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import NavegacionProductos from "../components/NavegacionProductos";
import AdminProducts from "./AdminProducts";

// HOOKS
import useGetLines from "../hooks/useGetLines";

// CSS
import "../scss/layout/pages/_PerrosComida.scss";
import "../scss/layout/components/_ListProducts.scss";

// API URL
const API_LINES = "https://aqueous-cove-93793.herokuapp.com/api/v1/lines";

function ListProducts(props) {
  const res = useGetLines(API_LINES);
  const comidaPerros = res.filter((line) => line.categoryId == 1);
  const comidaGatos = res.filter((line) => line.categoryId == 3);
  const productosPerros = res.filter((line) => line.categoryId == 2);
  const productosGatos = res.filter((line) => line.categoryId == 4);

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
            Crear Producto
          </Link>
          <Link to="/Lineas" className="btn btn-primary">
            Crear Linea
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
                  <AdminProducts
                    lineas={comidaPerros}
                    category={"Comida de Perros"}
                  />
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

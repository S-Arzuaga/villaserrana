import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Product from "../components/Product";
import Header from "../components/Header";
import * as CompaniesServer from "../components/CompaniesServer";
import useGetProducts from "../hooks/useGetProducts";

import "../scss/layout/pages/_Home.scss";

const API = "http://localhost:4000/api/v1/products";

function Home(props) {
  const products = useGetProducts(API);

  return (
    <div>
      <Header />

      <div className="Home">
        <div className="container">
          <div className="seccion__container">
            <h1>Nuestras categorías</h1>
            <div className="seccion__container-div">
              <a href="/PerrosComida">
                <div className="fondo comidadeperro">
                  <div>
                    <h3>Comida de Perros</h3>
                    <p>Ver Mas</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="seccion__container-div">
              <a href="/PerrosProductos">
                <div className="fondo productodeperro">
                  <div>
                    <h3>Productos de Perros</h3>
                    <p>Ver Mas</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="seccion__container-div">
              <a href="/GatosComida">
                <div className="fondo comidadegato">
                  <div>
                    <h3>Comida de Gatos</h3>
                    <p>Ver Mas</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="seccion__container-div">
              <a href="/GatosProductos">
                <div className="fondo productodegato">
                  <div>
                    <h3>Productos de Gatos</h3>
                    <p>Ver Mas</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="aside-div">
            <aside className="aside">
              <div className="aside__header">
                <h4 className="aside-title">Contacto</h4>

                <p className="aside-p">
                  <span>No dudes en contactarnos vía:</span>
                </p>
              </div>
              <div className="aside__body">
                <p className="aside-p">
                  <span>E-mail: </span> Petshopvillaserrana@gmail.com
                </p>
                <p className="aside-p">
                  <span>WhatsApp: </span>
                  <a href="https://wa.me/59897663634"> Contactar</a>{" "}
                </p>
                <p className="aside-p">
                  <span>Telefono: </span> 097 663 634
                </p>
                <p className="aside-p">
                  <span>Instagram: </span>{" "}
                  <a
                    href="https://www.instagram.com/petshopvillaserrana_uy/?hl=es"
                    target="_blank"
                  >
                    {" "}
                    @petshopvillaserrana_uy
                  </a>
                </p>
                <p className="aside-p">
                  <span>También en: </span> Mercado Libre{" "}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

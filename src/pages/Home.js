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
            <div className="seccion">
              <h3 className="Home__title">Comida de Perro</h3>
              <div className="Home__seccion">
                <div className="products">
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 2)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 136)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 144)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="vermas_button">
                  <Link to="/PerrosComida" className="btn vermas-btn">
                    Ver Mas
                  </Link>
                </div>
              </div>
            </div>
            <div className="seccion">
              <h3 className="Home__title">Productos de Perros</h3>
              <div className="Home__seccion">
                <div className="products">
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 147)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 148)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 149)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="vermas_button">
                  <Link to="/PerrosProductos" className="btn vermas-btn">
                    Ver Mas
                  </Link>
                </div>
              </div>
              <div className="Home__accesorios-perro"></div>
            </div>
            <div className="seccion">
              <h3 className="Home__title">Comida de Gato</h3>
              <div className="Home__seccion">
                <div className="products">
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 98)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 103)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 150)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="vermas_button">
                  <Link to="/GatosComida" className="btn vermas-btn">
                    Ver Mas
                  </Link>
                </div>
              </div>
              <div className="Home__accesorios-gato"></div>
            </div>
            <div className="seccion">
              <h3 className="Home__title">Productos de Gatos</h3>
              <div className="Home__seccion">
                <div className="products">
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 151)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 152)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                  <div className="home_product">
                    {products
                      .filter((product) => product.id === 153)
                      .map((filteredProduct) => (
                        <div>
                          <Product product={filteredProduct} />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="vermas_button">
                  <Link to="/GatosProductos" className="btn vermas-btn">
                    Ver Mas
                  </Link>
                </div>
              </div>
              <div className="Home__accesorios-gato"></div>
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
                  <span>E-mail: </span> corre@correo.com
                </p>
                <p className="aside-p">
                  <span>WhatsApp: </span>
                  <a href="https://wa.me/59897473704"> Contactar</a>{" "}
                </p>
                <p className="aside-p">
                  <span>Telefono: </span> 093304445
                </p>
                <p className="aside-p">
                  <span>Facebook: </span> Pet Shop Villa Serrana{" "}
                </p>
                <p className="aside-p">
                  <span>Instagram: </span> @petshopvillaserrana{" "}
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

import React from "react";
import { Link } from "react-router-dom";

import "../scss/layout/components/_Navbar.scss";
import Logo from "./Logo";

import logodefinitivoweb from "../images/logodefinitivoweb.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="navbar">
          <Logo />
          <div className="Navbar__menu">
            <ul className="menu__ul">
              <li className="menu__ul-li">
                {" "}
                <p className="menu__ul-li__p">Perros</p>
                <div className="sub-menu-1">
                  <ul>
                    <li>
                      <Link to="/PerrosComida">Comida</Link>
                    </li>
                    <li>
                      <Link to="/PerrosProductos">Productos</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu__ul-li">
                {" "}
                <p className="menu__ul-li__p">Gatos</p>
                <div className="sub-menu-1">
                  <ul>
                    <li>
                      <Link to="/GatosComida">Comida</Link>
                    </li>
                    <li>
                      <Link to="/GatosProductos">Productos</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu__ul-li">
                <p>
                  <Link className="contacto" to="/Contacto">
                    Contacto
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

import "../scss/layout/components/_Banner.scss";
import logo from "../images/logodefinitivoweb.svg";
function Banner(props) {
  return (
    <div className="Banner">
      <div className="Banner__logo">
        <img src={logo} alt="" />
      </div>
      <div className="Banner__text">
        <h4>Pet Shop</h4>
        <h2>Villa Serrana</h2>
        <p>Comida y Accesorios para mascotas</p>
      </div>
    </div>
  );
}

export default Banner;

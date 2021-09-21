import React from "react";

import ContactoInfo from "../components/ContactoInfo";
import AboutUsitem from "../components/AboutUsitem";
import Marcas from "../components/Marcas";

import "../scss/layout/pages/_Contacto.scss";

import entrega from "../images/entrega.svg";
import quality from "../images/quality.svg";
import huella from "../images/huella.svg";

import Logo from "../components/Logo";

function Contacto(props) {
  return (
    <div>
      <ContactoInfo />
      <div className="about_us">
        <div className="about_us-logo">
          <Logo />
        </div>
        <div className="about_us-info">
          <div>
            <AboutUsitem
              img={huella}
              title="Pet Shop Villa Serrana"
              text="En Villa Serrana nos dedicamos a la venta de productos enfocado a las necesidades, el bienestar y cuidado de nuestras mascotas."
            />
          </div>
          <div>
            <AboutUsitem
              img={entrega}
              title="Envio Gartis y Rápido"
              text="En Villa Serrana se realizan entregas a domicilio, totalmente gratis
          para Ciudad de la Costa y con puntualidad."
            />
          </div>
          <div>
            <AboutUsitem
              img={quality}
              title="Productos de Calidad"
              text="Nuestra mercancía cuenta con la calidad de las mejores marcas y líneas de productos para mascotas en el Uruguay."
            />
          </div>
        </div>
      </div>

      <div className="marcas">
        <h2 className="marcas-h2 text-center">
          Líneas con las que trabajamos:
        </h2>
        <Marcas />
      </div>
    </div>
  );
}

export default Contacto;

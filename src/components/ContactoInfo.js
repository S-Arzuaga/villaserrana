import React from "react";

import contacto from "../images/contact.svg";
import "../scss/layout/components/_ContactoInfo.scss";

function ContactoInfo(props) {
  return (
    <div className="Contacto">
      <div className="Contacto_story">
        <img src={contacto} alt="" />
      </div>
      <div className="Contacto_card">
        <h1 className="Contacto_card-title">¡Contáctanos!</h1>
        <div className="Contacto_card-info">
          <h4>
            Telefono: <a>093304445</a>
          </h4>
          <h4>
            WhatsApp: &raquo;{" "}
            <a href="https://wa.me/59897473704" target="_blank">
              Abrir Chat
            </a>{" "}
            &laquo;
          </h4>
          <h4>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/petshopvillaserrana/?hl=es"
              target="_blank"
            >
              @petshopvillaserrana
            </a>
          </h4>
          <h4>
            Facebook:{" "}
            <a href="" target="_blank">
              @petshopvillaserrana
            </a>
          </h4>
          <h4>
            Correo:{" "}
            <a href="" target="_blank">
              correo@correo.com
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactoInfo;

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
            Telefono: <a>097 663 634</a>
          </h4>
          <h4>
            WhatsApp: &raquo;{" "}
            <a href="https://wa.me/59897663634" target="_blank">
              Abrir Chat
            </a>{" "}
            &laquo;
          </h4>
          <h4>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/petshopvillaserrana_uy/?hl=es"
              target="_blank"
            >
              @petshopvillaserrana_uy
            </a>
          </h4>
          <h4>
            Correo:{" "}
            <a href="" target="_blank">
              Petshopvillaserrana@gmail.com
            </a>
          </h4>
          <h4>
            También estamos en:{" "}
            <a href="" target="_blank">
              Mercado Libre
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactoInfo;

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
            Telefono: 097 663 634
          </h4>
          <h4>
            WhatsApp: &raquo;{" "}
            <a href="https://wa.me/59897663634" target="_blank" rel="noreferrer">
              Abrir Chat
            </a>{" "}
            &laquo;
          </h4>
          <h4>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/petshopvillaserrana_uy/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              @petshopvillaserrana_uy
            </a>
          </h4>
          <h4>
            Correo:{" "}
            <a href="mailto:Petshopvillaserrana@gmail.com" target="_blank" rel="noreferrer">
              Petshopvillaserrana@gmail.com
            </a>
          </h4>
          <h4>
            También estamos en:{" "}
            <a href="https://www.mercadolibre.com.uy/" target="_blank" rel="noreferrer">
              Mercado Libre
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ContactoInfo;

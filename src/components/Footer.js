import React from "react";
import { Link } from "react-router-dom";

import logodefinitivoweb from "../images/logodefinitivoweb.svg";
import "../scss/layout/components/_Footer.scss";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="logo">
        <Link to="/villaserrana">
          <div>
            <img className="footer-logo" src={logodefinitivoweb} alt="" />
            <div className="logo__text">
              <h4>Pet Shop</h4>
              <h2>Villa Serrana</h2>
            </div>
          </div>
        </Link>
      </div>
      <div className="contacto">
        <div>
          <span> &raquo; </span>
          <p className="contacto-p"> Instagram</p>
        </div>
        <div>
          <span> &raquo; </span>
          <p className="contacto-p"> Facebook</p>
        </div>
        <div>
          <span> &raquo; </span>
          <p className="contacto-p"> E-mail</p>
        </div>
        <div>
          <span> &raquo; </span>
          <p className="contacto-p"> WhatsApp</p>
        </div>
      </div>
      <div className="text-center">
        <a href="https://storyset.com/home">Home illustrations by Storyset</a>
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

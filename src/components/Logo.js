import React from "react";
import { Link } from "react-router-dom";

import "../scss/layout/components/_Logo.scss";
import logodefinitivoweb from "../images/logodefinitivoweb.svg";

function Logo(props) {
  return (
    <div className="logo">
      <Link to="/villaserrana">
        <img className="navbar-logo mr-2" src={logodefinitivoweb} alt="" />
        <div className="logo__text">
          <h4>Pet Shop</h4>
          <h2>Villa Serrana</h2>
        </div>
      </Link>
    </div>
  );
}

export default Logo;

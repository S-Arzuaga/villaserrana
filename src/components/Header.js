import React from "react";

import Banner from "./Banner";

import "../scss/layout/components/_Banner.scss";

function Header(props) {
  return (
    <div className="Header">
      <Banner />
    </div>
  );
}

export default Header;

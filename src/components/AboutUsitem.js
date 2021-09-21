import React from "react";

import "../scss/layout/components/_AboutUs_item.scss";

function AboutUs_item(props) {
  return (
    <div className="about_us_seccion">
      <div className="about_us_seccion-img">
        <img src={props.img} alt="" />
      </div>
      <div className="about_us_seccion-text">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default AboutUs_item;

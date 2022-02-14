import React from "react";

import LineContext from "./LinesContext";
import axios from "axios";

const API = "http://localhost:4000/api/v1/lines";

const LineState = (props) => {
  

 

  const getLines = async () => {
    const res = await axios.get(API);
    console.log(res);
  };

  return (
    <LineContext.Provider value={getLines}>
      {props.children}
    </LineContext.Provider>
  );
};

export default LineState;

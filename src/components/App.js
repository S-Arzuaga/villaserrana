import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Home from "../pages/Home";
import PerrosComida from "../pages/PerrosComida";
import Footer from "./Footer";
import ProductForm from "./ProductForm";
import ListProducts from "./ListProducts";
import GatosComida from "../pages/GatosComida";
import PerrosProductos from "../pages/PerrosProductos";
import GatosProductos from "../pages/GatosProductos";
import Contacto from "../pages/Contacto";
import Lines from "../pages/Lines";
import Navbar from "./Navbar";

// Context

import LineState from "../context/lines/LineState";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/villaserrana" component={Home} />
        <LineState>
          <Route exact path="/PerrosComida" component={PerrosComida} />
          <Route exact path="/PerrosProductos" component={PerrosProductos} />

          <Route exact path="/GatosComida" component={GatosComida} />
          <Route exact path="/GatosProductos" component={GatosProductos} />

          <Route exact path="/ProductForm" component={ProductForm} />
          <Route exact path="/ProductosAdmin" component={ListProducts} />
          <Route exact path="/UpdateProduct/:id" component={ProductForm} />
          <Route exact path="/Lineas" component={Lines} />

          <Route exact path="/Contacto" component={Contacto} />
        </LineState>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

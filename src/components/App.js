import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import PerrosComida from "../pages/PerrosComida";
import Footer from "./Footer";
import ProductForm from "./ProductForm";
import ListProducts from "./ListProducts";
import GatosComida from "../pages/GatosComida";
import PerrosProductos from "../pages/PerrosProductos";
import GatosProductos from "../pages/GatosProductos";
import Contacto from "../pages/Contacto";

import LineasContext from "./LineasContext";
import Navbar from "./Navbar";

function App(props) {
  const lineas = {
    comidaPerros: [
      "Frost Perros",
      "Astro Perros",
      "Nhock",
      "Tiernitos Perros",
      "Dog Selection",
      "Protemix Perros",
      "Equilibrio Perros",
      "Max Perro",
      "Pro Plan Perros",
      "Dog Chow",
      "Dogui",
      "Excellent Perros",
      "Pedigree",
      "Eukanuba",
      "Iams Perros",
      "Big Boss",
      "The Golden Choice",
      "Natural Dog",
      "Keller",
      "Rusty",
      "Primocao",
      "Lager Perro",
      "Connie",
      "Wits Perros",
      "Toky",
      "Hills Perro",
      "Royal Cannin Perro",
      "Vicbac Perro",
      "Biofresh Perro",
      "ThreeDog",
    ],
    comidaGatos: [
      "Frost Gatos",
      "Astro Gato",
      "Jazz",
      "Tiernitos Gato",
      "Protemix Gato",
      "Equilibrio Gatos",
      "Pro Plan Cat",
      "Cat Chow",
      "Gati",
      "Excellent Gato",
      "Whiskas",
      "Iams Gato",
      "Pelusa",
      "Primogato",
      "Lager Gatos",
      "Wits Gato",
      "Hills Gato",
      "Royal Cannin Gato",
      "Pachá Gato",
      "Vicbac Gato",
      "Biofresh Gato",
      "ThreeCat",
    ],
    productosPerros: [
      "Cunas",
      "Casitas",
      "Juguetes de Perros",
      "Snacks",
      "Alimento húmedo Perro",
      "Antipulgas Perros",
      "Shampoo de Perro",
      "Otros Productos",
    ],
    productosGatos: [
      "Cunas",
      "Casitas",
      "Juguetes de Gatos",
      "Snacks",
      "Alimento húmedo Gato",
      "Arenas Sanitarias",
      "Antipulgas Gatos",
      "Shampoo de Gatos",
      "Otros Productos",
    ],
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/villaserrana" component={Home} />
        <LineasContext.Provider value={lineas}>
          <Route exact path="/PerrosComida" component={PerrosComida} />
          <Route exact path="/PerrosProductos" component={PerrosProductos} />

          <Route exact path="/GatosComida" component={GatosComida} />
          <Route exact path="/GatosProductos" component={GatosProductos} />

          <Route exact path="/ProductForm" component={ProductForm} />
          <Route exact path="/ListProducts" component={ListProducts} />
          <Route exact path="/UpdateProduct/:id" component={ProductForm} />

          <Route exact path="/Contacto" component={Contacto} />
        </LineasContext.Provider>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

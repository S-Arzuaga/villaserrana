import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as CompaniesServer from "./CompaniesServer";

import useGetLines from "../hooks/useGetLines";

const API_LINES = "http://localhost:4000/api/v1/lines";
const API_PRODUCTS = "http://localhost:4000/api/v1/products";

function ProductForm(props) {
  const history = useHistory();
  const params = useParams();

  // CREAR PRODUCTO

  const initialState = {
    id: 0,
    nombre: "",
    lineId: 0,
    size: "",
    precio: 1950,
    imagen: "",
  };

  const [product, setProduct] = useState(initialState);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res;
      if (!params.id) {
        res = await CompaniesServer.registerProduct(product);
        const data = await res.json();
        if (data.message === "success") {
          setProduct(initialState);
        }
      } else {
        await CompaniesServer.updateProduct(params.id, product);
      }
      history.push("/ListProducts");
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (productId) => {
    try {
      const res = await CompaniesServer.getProduct(productId);
      const data = await res.json();
      console.log(data);
      const { name, image, lineId, size, price } = data;
      setProduct({
        nombre: name,
        imagen: image,
        lineId: lineId,
        size,
        precio: price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }
  }, []);

  const res = useGetLines(API_LINES);
  const comidaPerros = res.filter((line) => line.categoryId == 1);
  const comidaGatos = res.filter((line) => line.categoryId == 3);
  const productosPerros = res.filter((line) => line.categoryId == 2);
  const productosGatos = res.filter((line) => line.categoryId == 4);

  return (
    <div className="mt-4">
      <h1 className="text-center">Crear un nuevo Producto</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="card card-body col-md-3 mx-auto mt-4"
      >
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleInputChange}
            placeholder="nombre"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Tamaño</label>
          <input
            type="text"
            name="size"
            value={product.size}
            onChange={handleInputChange}
            placeholder="Tamaño"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="text"
            name="precio"
            value={product.precio}
            onChange={handleInputChange}
            placeholder="precio"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen</label>
          <input
            type="text"
            name="imagen"
            value={product.imagen}
            onChange={handleInputChange}
            placeholder="imagen"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lineaId">LineId</label>
          <input
            type="number"
            name="lineId"
            value={product.lineId}
            onChange={handleInputChange}
            placeholder="lineaId"
            className="form-control"
          />
        </div>
        <div className="form-group">
          {params.id ? (
            <button type="submit" className="btn btn-primary mt-4">
              Actualizar
            </button>
          ) : (
            <button type="submit" className="btn btn-primary mt-4">
              Crear
            </button>
          )}
        </div>
      </form>
      <div className="Lineas row d-flex w-100">
        <div className="col-sm">
          <h3>Lineas para Perros:</h3>
          <div>
            <ul>
              {comidaPerros.map((linea) => (
                <li className="list-group-item d-flex gap-4">
                  <div>id: {linea.id}</div>
                  <div className="fw-bold">{linea.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-sm">
          <h3>Lineas para Gatos:</h3>
          <div>
            <ul>
              {comidaGatos.map((linea) => (
                <li className="list-group-item d-flex gap-4">
                  <div>id: {linea.id}</div>
                  <div className="fw-bold">{linea.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm">
          <h3>Lineas Productos de Perros:</h3>
          <div>
            <ul>
              {productosPerros.map((linea) => (
                <li className="list-group-item d-flex gap-4">
                  <div>id: {linea.id}</div>
                  <div className="fw-bold">{linea.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm">
          <h3>Lineas Productos de Gatos:</h3>
          <div>
            <ul>
              {productosGatos.map((linea) => (
                <li className="list-group-item d-flex gap-4">
                  <div>id: {linea.id}</div>
                  <div className="fw-bold">{linea.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;

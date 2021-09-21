import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as CompaniesServer from "./CompaniesServer";
import useLineasContext from "./useLineasContext";

function ProductForm(props) {
  const history = useHistory();
  const params = useParams();

  // CREAR PRODUCTO

  const initialState = {
    id: 0,
    nombre: "",
    linea: "",
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
        res = await CompaniesServer.registerCompany(product);
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
      const { nombre, imagen, linea, size, precio } = data.companies;
      setProduct({ nombre, imagen, linea, size, precio });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }
  }, []);

  const lineas = useLineasContext();
  const { comidaPerros, comidaGatos, productosPerros, productosGatos } = lineas;
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
          <label htmlFor="linea">linea</label>
          <input
            type="text"
            name="linea"
            value={product.linea}
            onChange={handleInputChange}
            placeholder="linea"
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
          <label htmlFor="precio">precio</label>
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
                <li className="list-group-item">{linea}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-sm">
          <h3>Lineas para Gatos:</h3>
          <div>
            <ul>
              {comidaGatos.map((linea) => (
                <li className="list-group-item">{linea}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm">
          <h3>Lineas Productos de Perros:</h3>
          <div>
            <ul>
              {productosPerros.map((linea) => (
                <li className="list-group-item">{linea}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm">
          <h3>Lineas Productos de Gatos:</h3>
          <div>
            <ul>
              {productosGatos.map((linea) => (
                <li className="list-group-item">{linea}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;

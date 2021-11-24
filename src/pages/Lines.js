import React, { useState } from "react";
import useGetLines from "../hooks/useGetLines";
import useGetCategories from "../hooks/useGetCategories";

import "../scss/layout/pages/_Lines.scss";

const API_LINES = "http://localhost:4000/api/v1/lines";
const API_CATEGORIES = "http://localhost:4000/api/v1/categories";

function Lines(props) {
  const initialState = {
    name: "",
    categoryId: "",
  };

  const [line, setLine] = useState(initialState);

  const lines = useGetLines(API_LINES);
  console.log(lines);

  const categories = useGetCategories(API_CATEGORIES);
  console.log(categories);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setLine({
      ...line,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function () {
    fetch(`${API_LINES}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: String(line.name).trim(),
        categoryId: String(line.categoryId).trim(),
      }),
    }).then((response) => {
      response.json();
    });
    window.location.reload(true);
  };

  const handleDelete = function (id) {
    fetch(`${API_LINES}/${id}`, { method: "DELETE" });
    window.location.reload(true);
  };

  return (
    <div className="Lines">
      <div className="row-1">
        <div className="categorias-conatiner">
          <h3>Categorias</h3>
          {categories.map((category) => (
            <div className="categoria d-flex justify-content-between ">
              <div className="id-place fw-bold">id:</div>
              <div className="categoryId">{category.id}</div>
              <div className="categoryName">{category.name}</div>
            </div>
          ))}
        </div>
        <div>
          <h3>Crear Linea</h3>
          <form action="" onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="categoryId">Categoria</label>
              <input
                type="text"
                name="categoryId"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Crear</button>
          </form>
        </div>
      </div>
      <div className="row-2">
        <div>
          <h3>Comida de Perros</h3>
          {lines
            .filter((line) => line.categoryId === 1)
            .map((line) => (
              <div className="line">
                <div className="lineId">
                  <div className="fw-bold">id:</div>
                  <div>{line.id}</div>
                </div>
                <div className="lineName">{line.name}</div>
                <button
                  className="delete btn btn-danger"
                  onClick={() => handleDelete(line.id)}
                >
                  Borrar
                </button>
              </div>
            ))}
        </div>
        <div>
          <h3>Productos de Perros</h3>
          {lines
            .filter((line) => line.categoryId === 2)
            .map((line) => (
              <div className="line">
                <div className="lineId">
                  <div className="fw-bold">id:</div>
                  <div>{line.id}</div>
                </div>
                <div className="lineName">{line.name}</div>
                <button
                  className="delete btn btn-danger"
                  onClick={() => handleDelete(line.id)}
                >
                  Borrar
                </button>
              </div>
            ))}
        </div>
        <div>
          <h3>Comida de Gatos</h3>
          {lines
            .filter((line) => line.categoryId === 3)
            .map((line) => (
              <div className="line">
                <div className="lineId">
                  <div className="fw-bold">id:</div>
                  <div>{line.id}</div>
                </div>
                <div className="lineName">{line.name}</div>
                <button
                  className="delete btn btn-danger"
                  onClick={() => handleDelete(line.id)}
                >
                  Borrar
                </button>
              </div>
            ))}
        </div>
        <div>
          <h3>Productos de Gatos</h3>
          {lines
            .filter((line) => line.categoryId === 4)
            .map((line) => (
              <div className="line">
                <div className="lineId">
                  <div className="fw-bold">id:</div>
                  <div>{line.id}</div>
                </div>
                <div className="lineName">{line.name}</div>
                <button
                  className="delete btn btn-danger"
                  onClick={() => handleDelete(line.id)}
                >
                  Borrar
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Lines;

import React from "react";
import "../scss/layout/components/_NavegacionProductos.scss";

function NavegacionProductos(props) {
  const lineas = props.lineas;

  const display = (e) => {
    e.preventDefault();
    const element = document.getElementById("NavegacionProductos-lista");
    element.classList.toggle("display");
  };

  return (
    <div className="NavegacionProductos">
      <button className="btn" onClick={display}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2"
          width="72"
          height="72"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
      <ul id="NavegacionProductos-lista" className="NavegacionProductos_lista">
        {lineas.map((linea) => (
          <a href={`#${linea.name}`} className="NavegacionProductos_lista-a">
            <li className="lista_li">{linea.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default NavegacionProductos;

import React from "react";
import { Link } from "react-router-dom";

function ListaDeRutinas({ rutinas }) {
  return (
    <div className="ContenedorSecundario">
      <div className="botones">
        {rutinas.map((rutina, index) => (
          <Link
            to={`/rutina/${rutina.nombre}`}
            key={index}
            className="linkBoton"
            state={{ descripcion: rutina.descripcion }}
          >
            {rutina.nombre}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListaDeRutinas;

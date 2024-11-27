import React from "react";
import { Link } from "react-router-dom";
import ForRutnas from "../Formularios/Rutinas/ForRutnas";

function ListaRutinas() {
  return (
    <>
      <div className="contenedorPrincipal">
        <div className="encabezadoDos">
          <img
            src="./EntrenaPro/Imagenes/Iconos/Estrella.jpg" // Cambiar por ícono que va
            alt="Logo"
            className="iconoLogo"
          />
          <h1 className="titulo">ENTRENA PRO</h1>
          <h3 className="subTitulo">Rutinas</h3>
        </div>
        <div className="botones">
          {/* <Link to="/RutinasModal"> */}
          <button className="boton">Crea tu rutina</button>
          {/* </Link> */}
        </div>
      </div>
      <ForRutnas />
    </>
  );
}

export default ListaRutinas;

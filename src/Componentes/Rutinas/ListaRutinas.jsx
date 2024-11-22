import React from "react";

function Inicio() {
  return (
    <div className="contenedorPrincipal">
      <div className="encabezadoDos">
        <img
          src="./Imagenes/Iconos/Estrella.jpg" // Cambiar por ícono que va
          alt="Logo"
          className="iconoLogo"
        />
        <h1 className="titulo">ENTRENA PRO</h1>
        <h3 className="subTitulo">Rutinas</h3>
      </div>
      <div className="botones">
        <button className="boton">Pecho y espalda</button>
        <button className="boton">Brazos</button>
        <button className="boton">Zona madia</button>
        <button className="boton">Piernas</button>
        <button className="boton">Dedo del pie</button>
        <button className="boton">...</button>
      </div>
    </div>
  );
}

export default Inicio;

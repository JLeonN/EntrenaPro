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
        <button className="boton">Crea tu rutina</button>
      </div>
    </div>
  );
}

export default Inicio;

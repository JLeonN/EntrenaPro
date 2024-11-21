import React from 'react'

function Inicio() {
  return (
    <div className="contenedorPrincipal">
      <div className="encabezado">
        <img
          src="./EntrenaPro/Imagenes/Iconos/Estrella.jpg" // Cambiar por ícono que va
          alt="Logo"
          className="iconoLogo"
        />
        <h1 className="titulo">ENTRENA PRO</h1>
      </div>
      <form className="formulario">
        <div className="campo">
          <input
            type="text"
            placeholder="Usuario"
            className="inputCampo"
          />
        </div>
        <div className="campo">
          <input
            type="password"
            placeholder="Contraseña"
            className="inputCampo"
          />
        </div>
      </form>
      <div className="botones">
        <button className="boton">INICIAR</button>
        <button className="boton">REGISTRARSE</button>
        <button className="boton">CONTINUAR</button>
      </div>
    </div>
  );
}

export default Inicio;
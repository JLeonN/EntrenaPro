import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="error404">
      <h1 className="tituloError">404</h1>
      <h2 className="subTituloError">Página no encontrada</h2>
      <p className="textoError">Lo sentimos, la página que buscas no existe.</p>
      <div className="botones">
        <Link to="/EntrenaPro">
          <button className="boton">Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;

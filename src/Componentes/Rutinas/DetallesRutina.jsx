import React from "react";
import { useLocation, useParams } from "react-router-dom";

function DetallesRutina() {
  const { nombreRutina } = useParams(); // Capturar el nombre de la rutina de la URL
  const location = useLocation();
  const { descripcion } = location.state || { descripcion: "Sin descripción" };

  return (
    <div className="contenedorDetalles">
      <h2 className="tituloH2">{nombreRutina}</h2>
      <div className="informacionRutina">
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

export default DetallesRutina;

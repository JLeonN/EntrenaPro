import React, { useState, useRef } from "react";

function Cronometro() {
  // Estado para manejar el tiempo transcurrido
  const [tiempo, setTiempo] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false);

  // Evita problemas al iniciar/pausar
  const intervaloRef = useRef(null);

  // Función para iniciar/pausar el cronómetro
  const manejarInicioPausa = () => {
    if (enMarcha) {
      clearInterval(intervaloRef.current); // Detiene el intervalo
    } else {
      intervaloRef.current = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 10); // Aumenta el tiempo en 10ms
      }, 10);
    }
    setEnMarcha(!enMarcha); // Alterna el estado
  };

  // Función para reiniciar el cronómetro
  const reiniciarCronometro = () => {
    clearInterval(intervaloRef.current); // Detiene el intervalo
    setTiempo(0); // Reinicia el tiempo
    setEnMarcha(false); // Asegura que no esté en marcha
  };

  // Formatear el tiempo en mm:ss:ms
  const formatearTiempo = (tiempo) => {
    const minutos = Math.floor(tiempo / 60000);
    const segundos = Math.floor((tiempo % 60000) / 1000);
    const milisegundos = Math.floor((tiempo % 1000) / 10);

    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}.${milisegundos.toString().padStart(2, "0")}`;
  };

  return (
    <div className="contenedorCronometro">
      <div className="encabezadoDos">
        <h1 className="titulo">Cronómetro</h1>
      </div>
      <div className="pantallaTiempo">
        <h2>{formatearTiempo(tiempo)}</h2>
      </div>
      <div className="botones">
        <button className="boton botonCronometro" onClick={manejarInicioPausa}>
          {enMarcha ? "Pausar" : "Iniciar"}
        </button>
        <button className="boton botonCronometro" onClick={reiniciarCronometro}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Cronometro;

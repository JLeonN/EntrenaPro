import React, { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { BiSolidFlag } from "react-icons/bi";

function Cronometro() {
  // Estado para manejar el tiempo transcurrido
  const [tiempo, setTiempo] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false);
  const [marcas, setMarcas] = useState([]); // Lista de marcas registradas

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

  // Función para marcar el tiempo actual
  const manejarMarcarReiniciar = () => {
    if (enMarcha) {
      // Si el cronómetro está en marcha, registra una marca
      const nuevaMarca = {
        tiempoActual: tiempo,
        diferencia:
          marcas.length > 0 ? tiempo - marcas[0].tiempoActual : tiempo,
      };

      setMarcas((prevMarcas) => [nuevaMarca, ...prevMarcas]); // Inserta la nueva marca al principio
    } else {
      // Si el cronómetro está en pausa, reinicia el cronómetro
      clearInterval(intervaloRef.current); // Detiene el intervalo
      setTiempo(0); // Reinicia el tiempo
      setMarcas([]); // Limpia las marcas
    }
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
        <h1 className="subTitulo">Cronómetro</h1>
      </div>
      <div className="pantallaTiempo">
        <h2>{formatearTiempo(tiempo)}</h2>
      </div>
      <div className="botones">
        <button className="boton botonCronometro" onClick={manejarInicioPausa}>
          {enMarcha ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="boton botonCronometro"
          onClick={manejarMarcarReiniciar}
        >
          {enMarcha ? <BiSolidFlag /> : <FaStop />}
        </button>
      </div>
      <div className="marcas">
        {marcas.map((marca, index) => (
          <p key={index}>
            <span className="numeroRedondo">{marcas.length - index}</span>
            {formatearTiempo(marca.tiempoActual)}
            <span className="diferencia">
              {formatearTiempo(marca.diferencia)}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Cronometro;

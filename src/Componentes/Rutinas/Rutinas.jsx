import React, { useState } from "react";
import Modal from "react-modal";
import ForRutnas from "../Formularios/Rutina/ForRutnas";
import ListaDeRutinas from "./ListaDeRutinas";
import { FaPlus } from 'react-icons/fa';
import Cronometro from "../Cronometro/Cronometro";

// Configuración de React Modal
Modal.setAppElement("#root");

function Rutinas() {
  // Estado para manejar si el modal está abierto o cerrado
  const [modalAbierto, setModalAbierto] = useState(false);
  // Estado para manejar la lista de rutinas creadas
  const [listaDeRutinas, setListaDeRutinas] = useState([]);
  // Función para abrir el modal
  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);
  // Función para agregar una nueva rutina a la lista
  const agregarRutina = (nuevaRutina) => {
    setListaDeRutinas([...listaDeRutinas, nuevaRutina]); // Agrega la nueva rutina al estado
  };

  return (
    <>
      <div className="contenedorPrincipal">
        <div className="encabezadoDos">
          <img
            src="./EntrenaPro/Imagenes/Iconos/Estrella.jpg"
            alt="Logo"
            className="iconoLogo"
          />
          <h1 className="titulo">ENTRENA PRO</h1>
          <h3 className="subTitulo">Rutinas</h3>
        </div>

        {/* Botón */}
        <div className="botones">
          <button className="botonFlotante" onClick={abrirModal}>
            <FaPlus />
          </button>
        </div>

        {/* Lista de las rutinas creadas */}
        <div className="estiloComponente">
          <ListaDeRutinas rutinas={listaDeRutinas} />
        </div>
      </div>

      {/* Modal que contiene el formulario */}
      <Modal
        isOpen={modalAbierto}
        onRequestClose={cerrarModal}
        contentLabel="Formulario para crear rutina"
        className="fondoModal"
      >
        {/* Formulario para agregar una nueva rutina */}
        <ForRutnas cerrarModal={cerrarModal} agregarRutina={agregarRutina} />
      </Modal>
      {/* <Cronometro /> */}
    </>
  );
}

export default Rutinas;

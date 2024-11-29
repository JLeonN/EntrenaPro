import React, { useState } from "react";
import Modal from "react-modal";
import ForRutnas from "../Formularios/Rutina/ForRutnas";
import ListaDeRutinas from "./ListaDeRutinas";

// Configuración de React Modal
Modal.setAppElement("#root");

function Rutinas() {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <>
      <div className="contenedorPrincipal">
        {/* Encabezado */}
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
            +
          </button>
        </div>

        {/* Lista de las rutinas creadas */}
        <div className="estiloComponente">
          <ListaDeRutinas />
        </div>
      </div>

      {/* Modal que contiene el formulario */}
      <Modal
        isOpen={modalAbierto}
        onRequestClose={cerrarModal}
        contentLabel="Formulario para crear rutina"
        className="fondoModal"
      >
        {/* Formulario dentro del modal */}
        <ForRutnas cerrarModal={cerrarModal} />
      </Modal>
    </>
  );
}

export default Rutinas;

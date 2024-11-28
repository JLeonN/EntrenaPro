import React, { useState } from "react";
import Modal from "react-modal";
import ForRutnas from "../Formularios/Rutina/ForRutnas";

// Configuración de React Modal
Modal.setAppElement("#root");

function ListaRutinas() {
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
          <button className="boton" onClick={abrirModal}>
            Crea tu rutina
          </button>
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

export default ListaRutinas;

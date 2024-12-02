import React, { useState } from "react";

function ForRutnas({ cerrarModal, agregarRutina }) {
  // Estados para manejar formulario
  const [nombreRutina, setNombreRutina] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Función para manejar formulario
  const manejarEnvio = (evento) => {
    evento.preventDefault(); // Previene la recarga de la página
    if (nombreRutina.trim() === "") {
      alert("El nombre de la rutina es obligatorio");
      return;
    }

    // Crear el objeto de la nueva rutina
    const nuevaRutina = {
      nombre: nombreRutina,
      descripcion: descripcion,
    };

    // Agregar la rutina a la lista
    agregarRutina(nuevaRutina);

    // Limpiar los campos del formulario y cerrar el modal
    setNombreRutina("");
    setDescripcion("");
    cerrarModal();
  };

  return (
    <div className="contenedorModal">
      <div className="encabezadoDos">
        <h1 className="titulo">ENTRENA PRO</h1>
        <h3 className="subTitulo">Nueva Rutina</h3>
      </div>
      <form className="formulario" onSubmit={manejarEnvio}>
        <div className="campoRutina">
          <label htmlFor="nombreRutina" className="labelRutina">
            Nombre de la rutina
          </label>
          <input
            type="text"
            id="nombreRutina"
            name="nombreRutina"
            placeholder="Ejemplo: Rutina de pecho"
            className="inputCampo"
            value={nombreRutina}
            onChange={(e) => setNombreRutina(e.target.value)}
          />
        </div>

        <div className="campoRutina">
          <label htmlFor="descripcion" className="labelRutina">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Añade una breve descripción..."
            className="inputCampo"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>

        <div className="botones">
          <button type="submit" className="boton">
            Guardar
          </button>
          <button type="button" className="boton" onClick={cerrarModal}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForRutnas;

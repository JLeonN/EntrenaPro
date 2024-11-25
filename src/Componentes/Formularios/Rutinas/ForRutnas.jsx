import React from "react";

function ForRutnas() {
  return (
    <div className="contenedorPrincipal">
      <div className="encabezadoDos">
        <h1 className="titulo">ENTRENA PRO</h1>
        <h3 className="subTitulo">Rutinas</h3>
      </div>
      <form className="formulario">
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
          ></textarea>
        </div>

        <div className="botones">
          <button type="submit" className="boton">
            Guardar
          </button>
          <button type="reset" className="boton">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForRutnas;

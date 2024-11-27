function ForRutnas({ cerrarModal }) {
  return (
    <div className="contenedorModal">
      {/* Encabezado del formulario */}
      <div className="encabezadoDos">
        <h1 className="titulo">ENTRENA PRO</h1>
        <h3 className="subTitulo">Rutina</h3>
      </div>

      {/* Formulario para crear una nueva rutina */}
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

        {/* Botones del formulario */}
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

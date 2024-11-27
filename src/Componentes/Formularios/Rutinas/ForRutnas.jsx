import { Link } from "react-router-dom";

function ForRutnas() {
  return (
    <div className="fondoModal">
      <div className="contenedorModal">
        <div className="encabezadoDos">
          <h1 className="titulo">ENTRENA PRO</h1>
          <h3 className="subTitulo">Rutina</h3>
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
            <Link to="/ListaDeRutinas">
              <button className="boton">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForRutnas;

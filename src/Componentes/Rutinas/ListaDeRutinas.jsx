function ListaDeRutinas({ rutinas }) {
  return (
    <div className="ContenedorSecundario">
      <div className="botones">
        {rutinas.map((rutina, indice) => (
          <button key={indice} className="boton">
            {rutina.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListaDeRutinas;

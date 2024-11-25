import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import ListaRutinas from "./Rutinas/ListaRutinas";
import ForRutnas from "./Formularios/Rutinas/ForRutnas";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          {/* NavBar */}

          {/* Inicio */}
          <Route path="/EntrenaPro" element={<Inicio />} />

          {/* Rutinas */}
          <Route path="/ListaDeRutinas" element={<ListaRutinas />} />
          <Route path="/RutinasModal" element={<ForRutnas />} />

          {/* Errores */}
          {/* <Route path="/*" element={<Error404 />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Estructura;

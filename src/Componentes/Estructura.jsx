import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Rutinas from "./Rutinas/Rutinas";
import ForRutnas from "./Formularios/Rutina/ForRutnas";
import Error404 from "./Errores/Error404";

const Estructura = () => {
  return (
    <>
      <div>
        <Routes>
          {/* NavBar */}

          {/* Inicio */}
          <Route path="/EntrenaPro" element={<Inicio />} />

          {/* Rutinas */}
          <Route path="/ListaDeRutinas" element={<Rutinas />} />
          <Route path="/RutinasModal" element={<ForRutnas />} />

          {/* Errores */}
          <Route path="/EntrenaPro/*" element={<Error404 />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;

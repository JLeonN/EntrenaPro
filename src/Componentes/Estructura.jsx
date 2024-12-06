import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Rutinas from "./Rutinas/Rutinas";
import ForRutnas from "./Formularios/Rutina/ForRutnas";
import Error404 from "./Errores/Error404";
import Cronometro from "./Cronometro/Cronometro";

const Estructura = () => {
  return (
    <>
      <div>
        <Routes>
          {/* Inicio */}
          <Route path="/EntrenaPro" element={<Inicio />} />

          {/* Login */}
          <Route path="/Cronometro" element={<Cronometro />} />

          {/* Registro */}
          <Route path="/*" element={<Error404 />} />

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

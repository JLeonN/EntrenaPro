import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          {/* NavBar */}

          {/* Inicio */}
          <Route path="/EntrenaPro" element={<Inicio />} />

          {/* Errores */}
          {/* <Route path="/*" element={<Error404 />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Estructura;

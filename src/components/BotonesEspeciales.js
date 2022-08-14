import React from "react";
import "../styles/BotonesEspeciales.css";
import Boton from "./Boton";

const BotonesEspeciales = ({ limpiarDisplay, cambiarSigno, calcularPorcentaje }) => {

  return (
    <div className="fila-botones-especiales">
      <Boton
        clase="boton-especial"
        manejarClic={limpiarDisplay}
        nombre={"AC"}
      />
      <Boton
        nombre={"+/-"}
        clase="boton-especial"
        manejarClic={cambiarSigno}
      />
      <Boton
        nombre={"%"}
        clase="boton-especial"
        manejarClic={calcularPorcentaje}
      />
    </div>
  );
};

export default BotonesEspeciales;
import React from "react";
import "../styles/BotonesCalculadora.css";

const BotonesCalculadora = ({ actualizarDisplay, agregarInput, cambioSigno }) => {

  return (
    <div className="contenedor-botones">
      <BotonesEspeciales />
      <BotonesNumeros />
      <BotonesOperadores />
    </div>
  );
};

export default BotonesCalculadora;
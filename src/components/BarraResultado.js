import React from "react";
import "../styles/BarraResultado.css";

const BarraResultado = ({ numero }) => {

  return (
    <div className="contenedor-barra-resultado">
      {numero}
    </div>
  );
};

export default BarraResultado;
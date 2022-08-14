import React from "react";
import "../styles/Boton.css";

const Boton = ({ clase, manejarClic, nombre }) => {

  return (
    <button
      className={clase}
      onClick={() => manejarClic(nombre)}
    >
      {nombre}
    </button>
  );
};

export default Boton;
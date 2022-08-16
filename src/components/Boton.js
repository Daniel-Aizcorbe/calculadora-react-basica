import React from "react";

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
import React from "react";
import "../styles/Boton.css";

const Boton = ({ clase, manejarClic }) => {

  return (
    <button
      className={clase}
      onClick={() => manejarClic}
    >
    </button>
  );
};

export default Boton;
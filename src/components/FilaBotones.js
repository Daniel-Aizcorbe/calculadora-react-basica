import React from "react";
import "../styles/FilaBotones.css";
import {generarBotones} from "../funcionalidades/generar-botones";

const FilaBotones = ({ numeros, manejarClic }) => {

  return (
    <div className="fila-botones">
      { generarBotones(numeros.split(""),manejarClic,"boton-numero") }
    </div>
  );
};

export default FilaBotones;
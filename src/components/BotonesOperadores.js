import React from "react";
import "../styles/BotonesOperadores.css";
import { generarBotones } from "../funcionalidades/generar-botones";

const BotonesOperadores = ({ eventoClic }) => {

  const signos = "/*-+=".split("");

  return (
    <div className="contenedor-botones-operadores">
      {generarBotones(signos, eventoClic)}
    </div>
  );
};

export default BotonesOperadores;
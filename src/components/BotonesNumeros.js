import React from "react";
import "../styles/BotonesNumeros.css";
import { generarBotones } from "../funcionalidades/generar-botones"

const BotonesNumeros = ({ actualizarInput }) => {

  const simbolos = "7894561230.".split("");

  return (
    <div className="contenedor-botones-numeros">
      {generarBotones(simbolos,actualizarInput,"boton-numero")}
    </div>
  );
};

export default BotonesNumeros;
import React from "react";
import "../styles/BotonesNumeros.css";
import { generarBotones } from "../funcionalidades/generar-botones"

const BotonesNumeros = ({ actualizarInput }) => {

  const simbolos = ".0123456789".split("");

  return (
    <div className="contenedor-botones-numeros">
      {generarBotones(simbolos,actualizarInput)}
    </div>
  );
};

export default BotonesNumeros;
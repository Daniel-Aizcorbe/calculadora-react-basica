import React from "react";
import "../styles/BotonesOperadores.css";
import {generarBoton, generarBotones} from "../funcionalidades/generar-botones";

const BotonesOperadores = ({ actualizarInput,calcularResultado }) => {

  const signos = "/*-+".split("");

  return (
    <div className="contenedor-botones-operadores">
      {generarBotones(signos, actualizarInput,"boton-operador")}
      {generarBoton("=",calcularResultado,"boton-operador")}
    </div>
  );
};

export default BotonesOperadores;
import React from "react";
import "../styles/BotonesNumeros.css";
import FilaBotones from "./FilaBotones";

const BotonesNumeros = ({ actualizarInput }) => {

  return (
    <div className="contenedor-botones-numeros">
      <FilaBotones numeros={"789"} manejarClic={actualizarInput}/>
      <FilaBotones numeros={"456"} manejarClic={actualizarInput}/>
      <FilaBotones numeros={"123"} manejarClic={actualizarInput}/>
      <FilaBotones numeros={"0."} manejarClic={actualizarInput} />
    </div>
  );
};

export default BotonesNumeros;
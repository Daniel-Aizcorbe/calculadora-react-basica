import Boton from "../components/Boton";
import React from "react";

const generarBoton = (simbolo, evento) => {
  return (
    <Boton
      manejarClic={evento}
      clase={"boton-operador"}
      nombre={simbolo}
    />
  );
};

export const generarBotones = (listaNombres, evento) => {
  return listaNombres.map(s => generarBoton(s, evento))
};
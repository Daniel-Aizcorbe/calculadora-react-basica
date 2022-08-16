import Boton from "../components/Boton";
import React from "react";

export const generarBoton = (simbolo, evento, clases) => {
  return (
    <Boton
      manejarClic={evento}
      clase={clases}
      nombre={simbolo}
    />
  );
};

export const generarBotones = (listaNombres, evento, clases) => {
  return listaNombres.map(s => generarBoton(s, evento,clases))
};
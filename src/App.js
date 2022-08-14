import './styles/App.css';
import React, {useState} from "react";

import BarraResultado from "./components/BarraResultado";
import BotonesEspeciales from "./components/BotonesEspeciales";
import BotonesNumeros from "./components/BotonesNumeros";
import BotonesOperadores from "./components/BotonesOperadores";

function App() {

  const [expMatematica, setExpMatematica] = useState("");
  const [display, setDisplay] = useState("0");

  const calcular = (expMath) => {
    alert("Calculando: " + expMath);
    return 0;
  };

  const cambioSigno = () => {
    let numeroOpuesto = (-1)*parseFloat(display);
    setDisplay(numeroOpuesto.toString());
  };

  const calcularPorcentaje = () => {
    let resultado = calcular(expMatematica + "/100");
    setDisplay(resultado.toString());
  };

  const limpiarDisplay = () => {
    setDisplay("0");
    setExpMatematica("0");
  };

  const agregarDisplay = (simbolo) => {
    setDisplay(Number(display + simbolo).toString() );
    //setExpMatematica(expMatematica + display);
  }

  const agregarOperando = (operando) => {
    setExpMatematica(expMatematica + display + operando);
  };

  return (
    <div className="contenedor-calculadora">
      <BarraResultado numero={display} />
      <div className="contenedor-botones">
        <div className="contenedor-botones-input">
          <BotonesEspeciales
            limpiarDisplay={limpiarDisplay}
            calcularPorcentaje={calcularPorcentaje}
            cambiarSigno={cambioSigno}
          />
          <BotonesNumeros
            manejarClic={agregarDisplay}
          />
          <BotonesOperadores
            eventoClic={agregarOperando}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

/*

          <BotonesEspeciales
            limpiarDisplay={setDisplay("")}
            calcularPorcentaje={calcularPorcentaje}
            cambiarSigno={cambioSigno}
          />
 */
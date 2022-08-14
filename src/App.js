import './styles/App.css';
import React, {useState} from "react";

import BarraResultado from "./components/BarraResultado";
import BotonesEspeciales from "./components/BotonesEspeciales";
import BotonesNumeros from "./components/BotonesNumeros";
import BotonesOperadores from "./components/BotonesOperadores";
import { evaluate } from "mathjs";

function App() {

  const [expMatematica, setExpMatematica] = useState("");
  const [display, setDisplay] = useState("0");

  const cambioSigno = () => {
    let numeroOpuesto = (-1)*parseFloat(display);
    setDisplay(numeroOpuesto.toString());
  };

  const calcularPorcentaje = () => {
    let resultado = evaluate(expMatematica + display + "/100");
    setDisplay(resultado.toString());
    setExpMatematica("0");
  };

  const limpiarDisplay = () => {
    setDisplay("0");
    setExpMatematica("0");
  };

  const agregarDisplay = (simbolo) => {
    if (display.startsWith("0")) {
      setDisplay(Number(display + simbolo).toString() );
    } else {
      setDisplay(display + simbolo);
    }
  }

  const agregarOperando = (operando) => {
    setExpMatematica(expMatematica + display + operando);
    setDisplay("0");
  };

  const calcularResultado = () => {
    let resultado = evaluate(expMatematica + display);
    setDisplay(resultado);
    setExpMatematica("");
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
            actualizarInput={agregarDisplay}
          />
          <BotonesOperadores
            actualizarInput={agregarOperando}
            calcularResultado={calcularResultado}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
import './styles/App.css';
import BarraResultado from "./components/BarraResultado";
import BotonesCalculadora from "./components/BotonesCalculadora";
import React, {useState} from "react";

function App() {

  const [expMatematica, setExpMatematica] = useState("");
  const [display, setDisplay] = useState("0");

  const actualizarDisplay = (simbolo) => {
    if (isNaN(simbolo)) {
      setDisplay("");
      setExpMatematica(expMatematica + simbolo);
    }
  };

  return (
    <div className="contenedor-calculadora">
      <BarraResultado numero={display}/>
      <BotonesCalculadora />
    </div>
  );
}

export default App;

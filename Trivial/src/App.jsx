import { useState, useEffect } from 'react'

import './App.css'

import preguntas from './data/preguntas';

const App =()=> {
  const [count, setCount] = useState(0);



  const [preguntaActual, setPreguntaActual] = useState(0);
  const pregunta = preguntas[preguntaActual];

  const respuestaSeleccionada = (correcta) => {
      console.log(correcta ? "Correcta" : "Incorrecta");
      if (correcta) {
        setPreguntaActual(preguntaActual + 1);
      } else {
        alert("Respuesta incorrecta");
      }
  };


  return (
    <div>
      <h1>Trivial</h1>
      <h2>{pregunta.pregunta}</h2>
        {pregunta.opciones.map(opcion => <div><button onClick={() => respuestaSeleccionada(opcion.correcta)}>X</button> {opcion.txt}</div>)}
      

       
    </div>
  )
}

export default App

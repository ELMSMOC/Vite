import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Panel, Box } from './styled';

import './App.css'

import preguntas from './data/preguntas';

const App =()=> {
  const [count, setCount] = useState(0);



  const [preguntaActual, setPreguntaActual] = useState(0);
  const pregunta = preguntas[preguntaActual];

  const respuestaSeleccionada = (correcta) => {
    if(correcta){
      setPreguntaActual(preguntaActual<preguntas.length-1? preguntaActual+1 : 0);
      setCount(count+1);
    } else {
      setPreguntaActual(preguntaActual>0? preguntaActual-1 : 0);
    }
  }
    
  {/*
    setPreguntaActual(correcta?
    preguntaActual<preguntas.length-1? preguntaActual+1 : 0 :
    preguntaActual>0? preguntaActual-1 : 0
  );
  */}



  return (
    <Box>
      <div>
        <h1>Trivial</h1>
      </div>
      <div>
        <h2>{pregunta.pregunta}</h2>
        <img src={pregunta.img} alt={pregunta.pregunta} />
      </div>
      <Panel>
        <h2>Puntuación: {count}</h2>
        {pregunta.opciones.map(opcion => <div><button onClick={() => respuestaSeleccionada(opcion.correcta)}>X</button> {opcion.txt}</div>)}
      </Panel>
      

       
    </Box>
  )
}

export default App

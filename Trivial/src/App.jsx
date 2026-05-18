import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Panel, Box } from './styled';

import './App.css'

import preguntas from './data/preguntas';

// Funcion desordenar array
function mezclarPreguntas(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

const App =()=> {
  const [count, setCount] = useState(0);

const [preguntasDesordenadas, setPreguntasDesordenadas] = useState([]);

useEffect(() => {
  setPreguntasDesordenadas(mezclarPreguntas(preguntas));
}, []);

const [preguntaActual, setPreguntaActual] = useState(0);
if(preguntasDesordenadas.length === 0) {
  return <div>Cargando preguntas...</div>;
}

  const pregunta = preguntasDesordenadas[preguntaActual];

  const respuestaSeleccionada = (correcta) => {
    if(correcta){
      setPreguntaActual(preguntaActual<preguntasDesordenadas.length-1? preguntaActual+1 : 0);
      setCount(count+1);
    } else {
      setPreguntaActual(preguntaActual>0? preguntaActual-1 : 0);
    }
  }



  return (
    <div>
      <h1 style={{ fontSize: '45px', marginBottom: '40px', fontWeight: 'bold' }}>Trivial</h1>
      <Box>
        <div>
          <h2>{pregunta.pregunta}</h2>
          {pregunta.img.endsWith('.mp4') ? (<video src={pregunta.img} controls />) :(pregunta.img.endsWith('.mp3')) ? (<audio src={pregunta.img} controls />) : (<img src={pregunta.img} alt="lo que sea" />)}
        </div>
        
        <Panel>
          <h2>Puntuación: {count}</h2>
          {pregunta.opciones.map(opcion => <div><button onClick={() => respuestaSeleccionada(opcion.correcta)}>X</button> {opcion.txt}</div>)}
        </Panel>
      </Box>
      

       
    </div>
  )
}

export default App

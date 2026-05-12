import { useState } from 'react';
import './App.css';

import styled, { css } from 'styled-components';
import ejerciciosdata from './data/rutinasyo';

import { Boton } from './styled';


function App() {
  const [count, setCount] = useState(0);

  const ejdiario = ejerciciosdata[count];

  console.log(ejdiario);
  
  
  return (
    <div>
      <h1>Hola</h1>

      <Boton>Iniciar</Boton>
    </div>
  )
}

export default App;

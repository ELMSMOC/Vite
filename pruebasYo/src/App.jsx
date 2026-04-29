import { useState } from 'react';
import './App.css';

import styled, { css } from 'styled-components';
import ejerciciosdata from './data/rutinasyo';
function App() {
  const [count, setCount] = useState(0);

  const ejdiario = ejerciciosdata[count];

  console.log(ejdiario);
  return (
    <h1>Hola</h1>

    <div></div>


  )
}

export default App

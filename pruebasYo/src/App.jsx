import { useState } from 'react'
import './App.css'

import styled, { css } from styled-components
import ejerciciosdata from './data/rutinasyo'
function App() {
  const [count, setCount] = useState(0);

  const ejdiario = ejerciciosdata[0];

  console.log(ejerciciosdata);
  return (
    <h1>Hola</h1>


  )
}

export default App

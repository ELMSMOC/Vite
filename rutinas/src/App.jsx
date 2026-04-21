import { useState } from 'react'
import './App.css'

import styled, { css } from 'styled-components';
import trabajosData  from './data/rutinas';

import { ItemsRow, Item } from './itemsrow';


function App() {
  const [trabajoActual, setTrabajoActual] = useState(0);

  const trabajo = trabajosData[trabajoActual];


  return (
    
    <div>
      <h1>{trabajo.titulo}</h1>
      <div>

        {trabajo.rutina.map(ejercicio=> <img src={ejercicio.img}></img>)}
      </div>
      <div>
        {trabajo.rutina.map(ejercicio=> <Item img={ejercicio.img[trabajoActual]}></Item>)}
      </div>

      <div>
        {trabajo.rutina.map(ejercicio=> <p>{ejercicio.ejercicio} - {ejercicio.reps} reps</p>)}
      </div>
    </div>   
    
    
  )
}

export default App;
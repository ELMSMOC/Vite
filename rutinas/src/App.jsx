import { useEffect, useState } from 'react'
import './App.css'

import styled, { css } from 'styled-components';
import trabajosData  from './data/rutinas';

import { ItemsRow, Item } from './styled';


function App() {
  const [trabajoActual, setTrabajoActual] = useState(0);

  const [ejercicioActual, setEjercicioActual] = useState(0);

  const trabajo = trabajosData[trabajoActual];

  const [contador, setContador]=useState(5);
  const[crono, setCrono]=useState(0);

  useEffect(()=>{
    if(!crono) return;

    const temporizador=setTimeout(()=>{
        if (contador>0) setContador((previo)=>previo-1);
        else {
          if(ejercicioActual<trabajo.rutina.length -1){
            setEjercicioActual((e)=>e+1);
            setContador(5);
          }
        }

    },1000);

  },[contador, crono, trabajoActual, ejercicioActual]);

  return (
    
    <div>
      <h1>{trabajo.titulo}</h1>

      <button onClick={()=>setCrono(true)}>Iniciar rutina</button>

      <h2>Tiempo: {contador} segundos</h2>


      <ItemsRow>
        {trabajo.rutina.map((ejercicio, indice) => <img onClick={()=>setEjercicioActual(indice)} src={ejercicio.img} alt={ejercicio.ejercicio}/>)}
      </ItemsRow>

      <Item>
          <img 
            src={trabajo.rutina[ejercicioActual].img} 
            alt ={trabajo.rutina[ejercicioActual].ejercicio} 
          />
          <div className='info-titulo'>
              <h3>Ejercicio {trabajo.rutina[ejercicioActual].ejercicio}</h3>
          </div>
          <div className='info-reps'>
              <p>Repeticiones: {trabajo.rutina[ejercicioActual].reps}</p>
          </div>

      </Item>
    </div>   
    
    
  )
}

export default App;
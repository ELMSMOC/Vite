import { useState, useEffect } from 'react';
import './App.css'

import dias from './rutinas';
import styled, {css} from 'styled-components';
import { Button, ItemsRow, Itemactual } from './styled';
import { use } from 'react';

function App() {
  const [trabajoActual, setTrabajoActual] = useState(0)

   const [ejercicioActual, setEjercicioActual] = useState(0);


  const [contador, setContador] = useState(5);
  const [crono, setCrono] = useState(0);
  const dia = dias[trabajoActual];

  useEffect(()=>{
    if(!crono) return;

    const temporizador = setTimeout(()=>{
      if (contador>0) setContador((previo)=>previo-1);
      else {
        if(ejercicioActual<dia.rutina.length -1){
          setEjercicioActual((e)=>e+1);
          setContador(5);
        } else {
          setEjercicioActual(0);
          setContador(5);
        }
      }
    }, 1000);


  },[contador, crono, trabajoActual, ejercicioActual]);


// Funcion para cambiar de dia

  return (
      <div className="App">
          <h1>{dia.titulo}</h1>

          <Button onClick={}>Anterior</Button>

          <Button onClick={()=> setCrono(true)} disabled={crono}>Iniciar</Button>
          {/*<Button onClick={()=> setCrono(false)}>Detener</Button>*/}

          <Button onClick={()=> setCrono(!crono)}>{ crono ? "Detener" : "Iniciar" }</Button>

          <Button onClick={}>Siguiente</Button>

          <p>Tiempo: {contador} segundos</p>
          <ItemsRow>
            {dia.rutina.map((ejercicio, indice) => <img onClick={()=> setEjercicioActual(indice)} src={ejercicio.img} alt={ejercicio.titulo} />)}
          </ItemsRow>

          <Itemactual>
              <img src={dia.rutina[ejercicioActual].img} alt={dia.rutina[ejercicioActual].titulo} />

              <div>
                  <h3>Ejercicio {dia.rutina[ejercicioActual].ejercicio}</h3>
              </div>
              
              <div>
                  <p>Repeticiones: {dia.rutina[ejercicioActual].repeticiones}</p>
              </div>
          </Itemactual>




      </div>
  )
}

export default App

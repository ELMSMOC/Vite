import { useState } from 'react'
import './App.css'

import styled, {css} from 'styled-components'
import  escenas from './assets/json/mijson'
import { Escena, ZonaPlaya } from './styled'


function App() {
  
const obtenerEscenaPorNombre = titulo => escenas.find(obj => obj.titulo == titulo)

const [escenaActual, setEscenaActual] = useState(obtenerEscenaPorNombre("principal"))

const [ancho, setWidth] = useState(0);
const [alto, setHeight] = useState(0);

const calculaDimensionEscena = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const a= 16;
  const b= 9;

  const proporcion = a / b;
  const proporcionPantalla = w / h;

  if (proporcion>proporcionPantalla) {
    setWidth(w);
    setHeight(w / proporcion); // Calcula el alto que corresponde al ancho dado la proporción 16/9
  } else {
    setHeight(h);
    setWidth(h * proporcion); // Calcula el ancho que corresponde al alto dado la proporción 16/9
  }
}

return (
  <Escena fondo={escenaActual.fondo}>
    {escenaActual.descripcion}

    <ZonaPlaya></ZonaPlaya>
  </Escena>
)

}
export default App

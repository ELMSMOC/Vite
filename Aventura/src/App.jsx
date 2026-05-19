import { useState } from 'react'
import './App.css'

import styled, {css} from 'styled-components'
import  escenas from './assets/json/mijson'
import { Escena } from './styled'


function App() {
  
const obtenerEscenaPorNombre = title => escenas.find(obj => obj.title == title)

const [escenaActual, setEscenaActual] = useState(obtenerEscenaPorNombre("principal"))

return (
  <Escena fondo={escenaActual.fondo}>
    {escenaActual.descripcion}
  </Escena>
)

}
export default App

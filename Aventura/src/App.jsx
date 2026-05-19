import { useState } from 'react'
import actual from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [imgActual, setImgActual] = useState(actual);

  return (
    <img src={imgActual} alt="Main Image" />
  )
}

export default App

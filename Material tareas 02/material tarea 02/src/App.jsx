import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Contenido from './components/Contenido'
import './estilos/estilos.css'

function App() {
  return (
    <div>
      <Menu></Menu>
      <Contenido></Contenido>
    </div>
  )
}

export default App

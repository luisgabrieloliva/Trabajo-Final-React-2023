import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listado from './assets/components/Listado/Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listado></Listado>
        
    </>
  )
}

export default App

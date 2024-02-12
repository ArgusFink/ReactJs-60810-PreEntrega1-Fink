import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Count/ItemCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <Contador />

      <ItemListContainer greeting = {"Sean bienvenidos a nuestro e-Commerce"}/>
  
    </>
  )
}

export default App
   
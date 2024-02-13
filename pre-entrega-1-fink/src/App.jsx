import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <ItemListContainer greeting = {"Sean bienvenidos a nuestro e-Commerce"}/>

      <ItemDetailContainer cod = {7}/>
    
    </>
  )
}

export default App
   
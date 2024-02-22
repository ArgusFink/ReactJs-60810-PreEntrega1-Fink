import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contador from './components/Count/ItemCount';
import Failed from './components/Failed';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer greeting={"Sean bienvenidos a nuestro e-Commerce"} />} />

          <Route path='/categoria/:catCod' element={<ItemListContainer />} />
 
          <Route path='/detalle/:codArt' element={<ItemDetailContainer />} />
          
          <Route path='*' element={<Failed />} />

        </Routes>

        <br /><br /><br />

      </BrowserRouter>





      {/* <ItemDetailContainer cod={3} /> */}



    </>
  )
}

export default App

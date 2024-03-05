import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import CartProvider from './context/CartContext';



import Contador from './components/Count/ItemCount';


import Failed from './components/Failed';
import Cart from './components/Cart/Cart';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>

        <CartProvider>

          <NavBar />

          <Routes>

            <Route path='/' element={<ItemListContainer greeting={"Sean bienvenidos a nuestro e-Commerce"} />} />

            <Route path='/categoria/:catCod' element={<ItemListContainer />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='/detalle/:codArt' element={<ItemDetailContainer />} />

            <Route path='*' element={<Failed />} />

          </Routes>

        </CartProvider>

        <br /><br /><br />

      </BrowserRouter>





      {/* <ItemDetailContainer cod={3} /> */}



    </>
  )
}

export default App

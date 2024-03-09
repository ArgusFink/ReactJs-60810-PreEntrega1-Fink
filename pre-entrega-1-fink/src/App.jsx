import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Failed from './components/Failed';
import Cart from './components/Cart/Cart';

const App = () => {

  return (
    <>
      <BrowserRouter>

        <CartProvider>

          <NavBar />

          <Routes>

            <Route path='/' element={<ItemListContainer greeting={"Sean bienvenidos a nuestro e-Commerce"} />} />

            <Route path='/categoria/:catCod' element={<ItemListContainer />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='/checkout' element={<Checkout />} />

            <Route path='/detalle/:idArt' element={<ItemDetailContainer />} />

            <Route path='*' element={<Failed />} />

          </Routes>

        </CartProvider>

        <br /><br /><br />

      </BrowserRouter>
    </>
  )
}

export default App

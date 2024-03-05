import React, { useContext } from 'react'

// import { ThemeContext } from '../../context/ThemeContext'

import { CartContext } from '../../context/CartContext'

import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem';


const Cart = () => {

    // const {cart} = useContext(ThemeContext)

    const { cart, delArt, emptyCart, totPrice } = useContext(CartContext)

    return (
        <div>

            {/* <p>Ar </p> */}

            {cart.length == 0 ?
                <>

                    <p>Carrito Vacío</p>

                    <Link to={"/"}> Seguir comprando </Link>
                </>
                :


                // AGREGAR
                // {Cart.map(p)}

                <>
                    <br />
                    <h1>Lista de Productos</h1>
                    <br /><br />

                    {cart.map((a) =>
                    (
                        <CartItem key={a.articulo.cod} articulo={a} delArt={delArt} />
                    )
                    )}

                    <h2>Total: ${totPrice()}</h2>

                    <button onClick={emptyCart}>Vaciar Carrito </button>

                </>




            }

        </div >
    ); 
};

export default Cart
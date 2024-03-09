import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const { cart, delArt, emptyCart, totPrice } = useContext(CartContext)

    return (
        <div>

            {cart.length == 0 ?
                <>
                    <p>Carrito Vacío</p>

                    <Link to={"/"}> Seguir comprando </Link>
                </>
                :
                <>
                    <br />
                    <h1>Lista de Productos</h1>
                    <br /><br />

                    {cart.map((a) =>
                    (
                        <CartItem key={a.articulo.id} articulo={a} delArt={delArt} />
                    )
                    )}

                    <h2>Total: ${totPrice()}</h2>

                    <button onClick={emptyCart}>Vaciar Carrito </button>

                    <Link to={"/checkout"}>

                        <button>Continuar compra</button>

                    </Link>
                </>
            }

        </div >
    );
};

export default Cart
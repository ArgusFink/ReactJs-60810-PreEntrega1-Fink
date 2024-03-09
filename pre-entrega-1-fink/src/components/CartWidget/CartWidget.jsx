import React, { useContext } from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {

    const { unitsProds} = useContext(CartContext)

    return (

        <>

            <div className="elementCart">

                <NavLink to={'/cart'}><img className="carrito" src="../carrito.png" alt="" /></NavLink>

                {/* <img className="carrito" src="./carrito.png" alt="" /> */}

                <p>{unitsProds() >= 1 ? unitsProds()  : null}</p>

                {/* <p>{cantCart}</p> */}

            </div>

        </>

    )
}

export default CartWidget
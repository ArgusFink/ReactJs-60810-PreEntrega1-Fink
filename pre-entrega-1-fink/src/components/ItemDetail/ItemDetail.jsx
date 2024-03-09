import React, { useState, useContext } from 'react'
import Contador from '../Count/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ articulo }) => {



    const { addCart } = useContext(CartContext)

    const [cart, setCart] = useState(false)

    const guardar = (count) => {

        setCart(true)

        addCart(articulo, count)

    }

    return (
        <div>
            <h2>{articulo.nombre}</h2>
            <img src={articulo.img} alt={articulo.nombre} />
            <p>{articulo.detalle}</p>
            <p>${articulo.precio}</p>
            <p>Stock: {articulo.stock}</p>

            {articulo.stock == 0 ? <strong><p>PRODUCTO SIN STOCK</p></strong>

                :

                (cart ? <Link to={'/cart'}>Ver Carrito</Link> : <Contador inicial={1} stock={articulo.stock} guardar={guardar} />)}
        </div>
    )
}

export default ItemDetail
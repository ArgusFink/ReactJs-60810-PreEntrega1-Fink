import React from 'react'
import Contador from '../Count/ItemCount'

const ItemDetail = ({articulo}) => {
    return (
        <div>
            <h2>{articulo.nombre}</h2>
            <img src={articulo.img} alt={articulo.nombre}/>
            <p>{articulo.detalle}</p>
            <p>{articulo.precio}</p>
            <p>{articulo.stock}</p>

            <Contador inicial={1} stock = {articulo.stock} />

        </div>
    )
}

export default ItemDetail
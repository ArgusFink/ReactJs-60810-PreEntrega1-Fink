import React from 'react'

const CartItem = ({ articulo, delArt }) => {

  return (
    <div>

      <h2>{articulo.articulo.nombre}</h2>

      <img src={articulo.articulo.img} alt={articulo.articulo.nombre} />

      <p>Unidades: {articulo.cantidad}</p>

      <p>Sub-total: ${articulo.articulo.precio * articulo.cantidad}</p>

      <button onClick={() => delArt(articulo.articulo.id)}>Eliminar producto</button>

      <br /><br /><br />
    </div>
  )
}

export default CartItem
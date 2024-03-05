import React from 'react'

const CartItem = ({articulo, delArt}) => {
  return (

    // <div>CartItem</div>
 
    <div>

      {/* Renderizar props del articulo */}

      <h2>{articulo.articulo.nombre}</h2>

      <img src={articulo.articulo.img} alt={articulo.articulo.nombre} />
      
      <p>Unidades: {articulo.cantidad}</p>

      <p>Sub-total: ${articulo.articulo.precio*articulo.cantidad}</p>


      {/* REVISAR 01º 56' 19/02/24 */}
      <button onClick ={()=> delArt(articulo.articulo.cod)}>Eliminar producto</button>

      <br /><br /><br />

    </div>

  )
}

export default CartItem 
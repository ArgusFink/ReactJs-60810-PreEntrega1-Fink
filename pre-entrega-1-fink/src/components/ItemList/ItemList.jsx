import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ articulos }) => {
    return (

        <div>
            {
                articulos.map((articulo) => {

                    return (
                        <Item key={articulo.id} articulo={articulo} />
                    )
                })
            }
        </div>
    )
}

export default ItemList
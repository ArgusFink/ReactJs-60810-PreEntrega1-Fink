import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({cod}) => {

    const [articulo, setArticulo] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch("./articulos.json")
                const data = await response.json()
                const art = data.find((p) => p.cod == cod)
                setArticulo(art)

            } catch (error) {
 
            }

        }

        fetchData()

    }, [cod])

    return (

        <div>

            <ItemDetail articulo={articulo} />

        </div>

    )
}

export default ItemDetailContainer
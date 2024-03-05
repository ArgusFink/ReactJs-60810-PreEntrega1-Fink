 import React, { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [articulo, setArticulo] = useState([]);

    const {codArt} = useParams();
        
    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch("../articulos.json")
                const data = await response.json()
                const art = data.find((p) => p.cod == codArt)
                setArticulo(art)

            } catch (error) { 

            }

        }

        fetchData()

    }, [])

    return (

        <div>

            <ItemDetail articulo={articulo} />

        </div>

    )
}

export default ItemDetailContainer
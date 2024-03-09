import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemDetailContainer = () => {

    const [articulo, setArticulo] = useState([]);

    const { idArt } = useParams();

    useEffect(() => {

        const nwDoc = doc(db, "articulos", idArt)

        getDoc(nwDoc)
            .then(res => {

                const data = res.data()
                const nwArticle = { id: res.id, ...data }
                setArticulo(nwArticle)
            })

            .catch(error => console.log(error))

    }, [])

    return (
        <div>

            <ItemDetail articulo={articulo} />

        </div>
    )
}

export default ItemDetailContainer
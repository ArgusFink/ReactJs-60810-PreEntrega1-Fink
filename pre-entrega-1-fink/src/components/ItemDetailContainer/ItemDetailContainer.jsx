 import React, { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const [articulo, setArticulo] = useState([]);

    const {idArt} = useParams();
        
    useEffect(() => {

        // const fetchData = async () => {

        //     try {

        //         const response = await fetch("../articulos.json")
        //         const data = await response.json()
        //         const art = data.find((p) => p.id == codArt)
        //         setArticulo(art)

        //     } catch (error) { 

        //     }

        // }

        // fetchData()





        
        const db = getFirestore()

        const nwDoc = doc(db,"articulos",idArt)

        getDoc(nwDoc)
        .then(res => {

            const data = res.data()
            const nwArticle = {id: res.id,...data}
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
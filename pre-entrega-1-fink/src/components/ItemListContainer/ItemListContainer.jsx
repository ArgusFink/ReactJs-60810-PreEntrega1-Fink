import React, { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = ({ greeting }) => {

  const [articulos, setArticulos] = useState([]);

  const { catCod } = useParams();

  useEffect(() => {

    const articles = catCod ? query(collection(db, "articulos"), where("categoria", "==", catCod)) : collection(db, "articulos")

    getDocs(articles)
      .then((res) => {

        const nwArticles = res.docs.map((doc) => {

          const data = doc.data()

          return { id: doc.id, ...data }

        })

        setArticulos(nwArticles)
      })

      .catch((error) => console.log(error))

  }, [catCod])

  return (

    <div>

      <h2>{greeting}</h2>
      <br /><br /><br />

      {articulos.length == 0 ? <p>ACTUALIZANDO</p> : <ItemList articulos={articulos} />}

    </div>
  )
}

export default ItemListContainer
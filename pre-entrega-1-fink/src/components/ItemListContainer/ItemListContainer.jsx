import React, { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';



const ItemListContainer = ({ greeting }) => {

  const [articulos, setArticulos] = useState([]);

  const { catCod } = useParams();

  useEffect(() => {





    // const fetchData = async () => {

    //   try {

    //     const response = await fetch("../articulos.json")
    //     const data = await response.json()

    //     if (catCod) {

    //       const filterArts = data.filter((p) => p.categoria == catCod)
    //       setArticulos(filterArts)

    //     } else {

    //       setArticulos(data)

    //     }

    //   } catch (error) {

    //   }

    // }

    // fetchData()





    const db = getFirestore()

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





    // //FUNCIONANDO ANTES (BCKP)
    // <div>

    //   <h2>{greeting}</h2>
    //   <br /><br /><br />

    //   {articulos.length == 0 ? <p>ACTUALIZANDO</p>
    //     :

    //     articulos.map((articulo) => {

    //       return (

    //         <Link to={`/detalle/${articulo.cod}`} >

    //           <div className="arts" key={articulo.cod} >
    //             <h2>{articulo.nombre}</h2>

    //             <img src={articulo.img} alt={articulo.nombre} />

    //             <br /><br /><br />

    //           </div>

    //         </Link>

    //       )
    //     })
    //   }

    // </div>

  )
}

export default ItemListContainer
import React, { useState, useEffect } from 'react'
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({ greeting }) => {

  const [articulos, setArticulos] = useState([]);

  const { catCod } = useParams();

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch("../articulos.json")
        const data = await response.json()

        if (catCod) {

          const filterArts = data.filter((p) => p.categoria == catCod)
          setArticulos(filterArts)

        } else {

          setArticulos(data)

        }

      } catch (error) {

      }

    }

    fetchData()

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
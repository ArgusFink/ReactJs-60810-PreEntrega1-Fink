import React, { useState, useEffect } from 'react'
import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch("./articulos.json")
        const data = await response.json()
        setArticulos(data)

      } catch (error) {

      }

    }

    fetchData()

  }, [])



  return (
    <div>

      <h2>{greeting}</h2>
      <br/><br/><br/>

      {articulos.length == 0 ? <p>ACTUALIZANDO</p>
        :
        
        articulos.map((articulo) => {
 
          return (

            <div className = "arts" key = {articulo.cod} >
              <h2>{articulo.nombre}</h2>

              <img src={articulo.img} alt= {articulo.nombre} />

              <br/><br/><br/>
                    
            </div>          
          )
        })
      }


    </div>
  )
}

export default ItemListContainer
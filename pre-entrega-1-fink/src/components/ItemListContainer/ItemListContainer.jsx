import React, { useState, useEffect } from 'react'

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

      {articulos.length == 0 ? <p>ACTUALIZANDO</p>
        :
        articulos.map((articulo, index) => {

          return (

            <div className = "arts">
              <h3>{articulo.nombre}</h3>
              <p>{articulo.detalle}</p>
              <p>{articulo.precio}</p>
              <p>{articulo.stock}</p>
            </div>          
          )
        })
      }


    </div>
  )
}

export default ItemListContainer
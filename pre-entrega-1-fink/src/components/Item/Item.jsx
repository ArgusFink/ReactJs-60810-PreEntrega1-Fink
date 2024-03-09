import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ articulo }) => {
    return (

        <Link to={`/detalle/${articulo.id}`} >

            <div className="arts" key={articulo.id} >
                <h2>{articulo.nombre}</h2>

                <img src={articulo.img} alt={articulo.nombre} />

                <br /><br /><br />

            </div>
        </Link>
    )
}

export default Item
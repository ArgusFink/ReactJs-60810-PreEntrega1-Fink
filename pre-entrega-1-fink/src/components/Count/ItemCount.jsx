import React, { useState, useEffect } from 'react'

const Contador = ({inicial, stock}) => {

    const [contador, setContador] = useState(1)

    const agregar = () => {

        //"Comentario"

    }

    const restar = () => {

        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    const sumar = () => {
        
        if (contador < stock){
            setContador(contador + 1)
        }

    }

    useEffect(

        () => {

            // const intervalId = setInterval (()=> {
            //     setContador ((prevContador) => prevContador + 1 )
            // }, 2000) 

        }, []
    )



    return (

        <div>Contador: {contador}
            <br />
            <button onClick={agregar}>Agregar al carrito</button>
            <br />
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>

        </div>
    )
}

export default Contador  
import React, { useState, useEffect } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(10)

    const agregar = () => {

        //"Comentario"

    }

    const restar = () => {

        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const sumar = () => {
        
        if (contador < 10){
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
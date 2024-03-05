import React, { useState, createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])






  





    const addCart = (articulo, cantidad) => {



        const articuloCargado = cart.findIndex(art => art.articulo.cod == articulo.cod)







        // VER SI HAGO COMPARADOR TERNARIO
        // if (!articuloCargado) {

        if (articuloCargado == -1) {

            setCart([...cart, { articulo, cantidad }])

        } else {

            const reloadCart = [...cart]

            reloadCart[articuloCargado].cantidad += cantidad
            setCart(reloadCart)

        }








        // //SUPUESTO BCKP FUNCIONANDO
        // //logica duplicado
        // const productoExistente = cart.find(art => art.articulo.id == articulo.id)

        // if (!productoExistente) {
        //     //que pasa si no existe
        // } else {
        //     //que pasa si existe
        // }

    }

    const delArt = (artCod) => {

        const reloadCart = cart.filter(item => item.articulo.cod !== artCod)
        setCart(reloadCart)

    }


    const unitsProds = () => {

        const totalUnits = cart.reduce((total,item) => total+item.cantidad,0)

        return totalUnits

    }


    const totPrice = () => {

        const finalPrice = cart.reduce((total,item) => total + (item.articulo.precio * item.cantidad),0)

        return finalPrice

    }


    const emptyCart = () => {

        setCart([])

    }





    //CONSOLE.LOG
    console.log(cart)








    return (

        <CartContext.Provider value={{

            cart,
            addCart,
            delArt,
            unitsProds,
            totPrice,
            emptyCart



            // //BCKP
            // cart,
            //addCart,
            // total,
            // cantCart

        }} >

            {children}

        </CartContext.Provider>

    )

}

export default CartProvider
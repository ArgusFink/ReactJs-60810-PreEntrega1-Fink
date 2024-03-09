import React, { useState, createContext } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addCart = (articulo, cantidad) => {

        const articuloCargado = cart.findIndex(art => art.articulo.id == articulo.id)

        if (articuloCargado == -1) {

            setCart([...cart, { articulo, cantidad }])

        } else {

            const reloadCart = [...cart]

            reloadCart[articuloCargado].cantidad += cantidad
            setCart(reloadCart)
        }
    }

    const delArt = (artId) => {

        const reloadCart = cart.filter(item => item.articulo.id !== artId)
        setCart(reloadCart)
    }

    const unitsProds = () => {

        const totalUnits = cart.reduce((total, item) => total + item.cantidad, 0)

        return totalUnits
    }

    const totPrice = () => {

        const finalPrice = cart.reduce((total, item) => total + (item.articulo.precio * item.cantidad), 0)

        return finalPrice
    }


    const emptyCart = () => {

        setCart([])
    }

    return (

        <CartContext.Provider value={{

            cart,
            addCart,
            delArt,
            unitsProds,
            totPrice,
            emptyCart
        }} >

            {children}

        </CartContext.Provider>
    )
}

export default CartProvider
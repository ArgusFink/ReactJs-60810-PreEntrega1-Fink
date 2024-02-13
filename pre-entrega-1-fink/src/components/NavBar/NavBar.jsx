import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {

    return (
        <>

            <div className="nameAndNavBar">

                <img id="logo" src="../public/logo.png" alt="" />



                <h1>Play In The Sky</h1>

                <ul className="items">

                    <li><a href="#">Home</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contactanos</a></li>

                </ul>

                <CartWidget />

            </div>

        </>
    )

}

export default NavBar

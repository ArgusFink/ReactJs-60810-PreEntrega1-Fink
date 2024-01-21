import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {

    return (
        <>

            <img id = "logo" src="../public/logo.png" alt="" />
            
            <div className = "nameAndNavBar">
                
            <h1>Play In The Sky</h1>

                <ul className="items">

                    <li><a href="#">Home</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contactanos</a></li>

                </ul>

            </div>

            <CartWidget />

        </>
    )

}

export default NavBar

import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <>

            <div className="nameAndNavBar">

                {/* <img id="logo" src="../public/logo.png" alt="" /> */}

                <NavLink to={'/'}><img id="logo" src="../public/logo.png" alt="" /></NavLink>



                <h1>Play In The Sky</h1>

                <ul className="items">

                    {/* <li><a href="#">Home</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contactanos</a></li> */}

                    <li>

                        <NavLink to={'/'}>Inicio</NavLink>

                    </li>

                    <li>

                        <NavLink to={'categoria/Pedales'}>Pedales</NavLink>

                    </li>

                    <li>

                        <NavLink to={'categoria/Aceleradores'}>Aceleradores</NavLink>

                    </li>

                    <li>

                        <NavLink to={'categoria/Mandos'}>Mandos</NavLink>

                    </li>

                    <li>

                        <NavLink to={'categoria/Aviónica'}>Aviónica</NavLink>

                    </li>

                    <li>

                        <NavLink to={'categoria/Paneles'}>Paneles</NavLink>

                    </li>

                </ul>

                <CartWidget />

            </div>

        </>
    )

}

export default NavBar

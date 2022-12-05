import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Navbar_Inicio } from '../components'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'


export const PedidoMesa = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <h1 className='text-white m-2'>Detalle</h1> 
                <Link to='/menuMesa'>
          <a href="#" className="nav-link text-white">

            <i className="fa-solid fa-utensils m-2" style={{ color: '#ffffff' }}></i>
          </a>
        </Link>               
            </nav>

        </>
    )
}
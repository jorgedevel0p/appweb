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
            </nav>

        </>
    )
}
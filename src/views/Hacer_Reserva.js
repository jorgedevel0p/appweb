import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { contenedor } from '../styles/inicio.css'
import CarouselInicio from '../components/Carousel'
import { Layout_Cliente } from '../components'
import Fondo_Cliente from '../assets/Fondo_Cliente.png'



export const Hacer_Reserva = () => {

   

    return (
        <>
            <Layout_Cliente>
                <div>
                    <img src={Fondo_Cliente} className="card-img" height={140} />
                </div>

                <h1 className="text-center">Hacer Nueva Reserva</h1>
                <hr></hr>
            



            </Layout_Cliente>
            <Footer />
        </>
    )
}

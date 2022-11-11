import React, { useEffect, useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Layout_Cliente } from '../components/Layout'
import restaurantContext from '../context/restaurantContext'
import { contenedor } from '../styles/inicio.css'
import CarouselInicio from '../components/Carousel'
import Fondo_Cliente from '../assets/Fondo_Cliente.png'



export const Mis_Reservas = () => {

    return (
        <>
            <Layout_Cliente>
                <div>
                    <img src={Fondo_Cliente} className="card-img" height={140} />
                </div>

                <h1 className="text-center">Mis Reservas</h1>
                <hr></hr>

            </Layout_Cliente>
            <Footer />
        </>
    )
}

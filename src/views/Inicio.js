import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Navbar_Inicio } from '../components'
import { contenedor } from '../styles/inicio.css'
import CarouselInicio from '../components/Carousel'



export const Inicio = () => {

    return (
        <>
            <Navbar_Inicio />
            <CarouselInicio />
            <Footer />
        </>
    )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Navbar_Inicio } from '../components'
import { contenedor } from '../styles/nosotros.css'
import Image_nosotros from '../assets/Image_nosotros.jpg'


export const Nosotros = () => {
  return (
    <>
      <Navbar_Inicio />
      <div class="card ">
        <img
          class="image_nosotros img-fluid rounded-start"
          src={Image_nosotros} alt="..."></img>
        <div class="card-img-overlay">
          <h5 class="card-title">Nosotros</h5>
          <p class="card-text-parrafo">Luego de dejar el pequeño pueblo Toquihua nuestro fundador Carlos Carrasco decidió poner en pie su idea de restaurant motivado por su pasión por la cocina.</p>
          <p class="card-text-parrafo">Siglo XXI comenzó siendo restaurant familiar el cual lleva 50 años entregando y perfeccionando sus preparaciones de comida casera siempre entregando el mejor servicio a las familias de Chile.</p>
        </div>
      </div>
      <Footer/>
    </>
  )

}
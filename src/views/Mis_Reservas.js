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

    const {mesas, users, getUserById} = useContext(restaurantContext)
    const [reservas, setReservas] = useState([])


    const nameUser = localStorage.getItem('username')
    const idUser = localStorage.getItem('id')
    const emailUser = localStorage.getItem('email')
    const userName = localStorage.getItem('username')

    const getReservas = () => {
        makeHttpRequest({
            operation: '/reserva/',
            data: null,
            method: 'GET',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                setReservas(data)
                console.log(data, 'Listado de Reservas recibido')
            }
        })
    }


    return (
        <>
            <Layout_Cliente>
                <div>
                    <img src={Fondo_Cliente} className="card-img" height={140} />
                </div>

                <h1 className="text-center">Mis Reservas</h1>
                <hr></hr>

                <h6> Hola, {nameUser}</h6>
                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>

                        </div>

                        <div className='card-body'>
                            <table>
                                <thead>
                                    <tr >
                                        <th scope='col' >
                                            ID Reserva
                                        </th>
                                        <th scope='col' >
                                            Estado
                                        </th>
                                        <th scope='col' >
                                            Mesa
                                        </th>
                                        <th scope='col' >
                                            Fecha
                                        </th>
                                        <th scope='col' >
                                            Hora
                                        </th>
                                        <th scope='col' >
                                            Cancelar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>


                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </Layout_Cliente>
            <Footer />
        </>
    )
}

import React, { useEffect, useState, useContext, useRef } from 'react'
import { useHttpRequest } from "../hooks/useHttpRequest";
import { Footer } from '../components/Footer'
import { Layout_Cliente } from '../components/Layout'
import restaurantContext from '../context/restaurantContext'
import Fondo_Cliente from '../assets/Fondo_Cliente.png'


const DEFAULT_STATE = {
    id: '',
    status: '',
    mesa: '',
    user: '',
    date: '',
    time: '',
    date_reserva: '',
}

export const Mis_Reservas = () => {


    const nameUser = localStorage.getItem('name')
    const idUser = parseInt(localStorage.getItem('id'))
    const emailUser = localStorage.getItem('email')
    const userName = localStorage.getItem('username')

    const [reserva, setReserva] = useState(DEFAULT_STATE)
    const [reservas, setReservas] = useState([])
    const [form, setForm] = useState(DEFAULT_STATE)
    const { isLoading, makeHttpRequest } = useHttpRequest()

    const handleChange = (e) => {
        console.log(e.target.value, 'xxx')
        setReserva({
            ...reserva,
            [e.target.name]: e.target.value
        })
    }

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

    const saveReserva = () => {
        console.log(reserva)
        makeHttpRequest({
            operation: '/reserva/',
            data: reserva,
            method: 'POST',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Ha guardado Reserva correctamente')
                getReservas()
                resetForm()
            }
        })
    }

    const updateReserva = (id) => {
        if (confirm("¿Desea actualizar la información de este reserva?") === false) {
            return
        }
        makeHttpRequest({
            operation: `/reserva/${id}`,
            data: reserva,
            method: 'PUT',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                console.log(data, 'Reserva se ha actualizado correctamente')
                getReservas()
                resetForm()
            }
        })
    }

    const setReservaDataIntoForm = (reserva) => {
        openModalImperative();
        setReserva(reserva)
    }

    const deleteReserva = (id) => {
        if (confirm("¿Desea eliminar la reserva?") === false) {
            return
        }
        makeHttpRequest({
            operation: `/reserva/${id}`,
            data: null,
            method: 'DELETE',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data))
                    return
                }
                alert('Se ha eliminado la reserva correctamente')
                console.log(JSON.stringify(data))
                getReservas()
            }
        })
    }

    const resetForm = () => [
        setReserva({ ...DEFAULT_STATE })
    ]

    useEffect(() => {
        getReservas()
    }, [])


    const listaFiltrada = reservas.filter(res => (res.user == idUser))

    console.log(listaFiltrada, 'is')


    return (
        <>
            <Layout_Cliente>
                <div>
                    <img src={Fondo_Cliente} className="card-img" height={140} />
                </div>

                <h1 className="text-center">Mis Reservas</h1>
                <hr></hr>               
                <div className='container'>
                <h6> Hola, {nameUser}</h6>
                    <div className='card-body text-center'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Reserva</th>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>Mesa</th>                                    
                                    <th scope='col'>Fecha</th>
                                    <th scope='col'>Hora</th>
                                    {/* <th scope='col'>Horario</th> */}
                                    <th scope='col'>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {listaFiltrada.map(res => (
                                    <tr>
                                        <td>{res.id}</td>
                                        <td>{res.status}</td>
                                        <td>{res.mesa}</td>                                       
                                        <td>{res.date}</td>
                                        <td>{res.time}</td>
                                        {/* <td>{res.date_reserva}</td> */}
                                        <td>
                                        <button
                                            type='button'
                                            className='btn btn-danger btn-xs'
                                            onClick={() => deleteReserva(res.id)}>
                                            <i
                                                className="fa-solid fa-trash">
                                            </i>
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout_Cliente>
            <Footer />
        </>
    )
}

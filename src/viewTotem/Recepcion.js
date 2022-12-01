import React, { useState, useContext, useEffect } from 'react'
import { DateTime } from 'luxon'
import "react-datepicker/dist/react-datepicker.css";
import { PizarraMesas } from '../components'
import restaurantContext from '../context/restaurantContext'
import { getAvailableMesasForThatDate } from '../utils/ReservasChecker'
import { useHttpRequest } from '../hooks/useHttpRequest'


export const Recepcion = () => {
    const { makeHttpRequest } = useHttpRequest()
    const { mesas, getMesasById } = useContext(restaurantContext)
    const [mesasDisponibles, setMesasDisponibles] = useState([])

    const [mesa, setMesa] = useState('')
    const [startDate, setStartDate] = useState(new Date())

    const saveReserva = () => {
        if (!mesa) return

        if (!confirm("Seguro de crear la reserva?") == true) {
            return
        }

        const reservaDate = DateTime.fromISO(startDate.toISOString())
        const reservaToSave = {
            status: 'Reservado',
            mesa: mesa,
            user: 7, //Hay que cambiarlo a user "Invitado", en el mio es 8 pero no sé en los demás
            date: reservaDate.toISODate(),
            time: reservaDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS),
            date_reserva: startDate
        }

        makeHttpRequest({
            operation: '/reserva/',
            data: reservaToSave,
            method: 'POST',
            callback: ({ ok, data }) => {
                if (!ok) {
                    alert(JSON.stringify(data)) 
                    return
                }
                console.log(data) 
                
                alert(data, 'Ha guardado Reserva correctamente')                             
            },   
            mesasDisponibles
        })             
    }

    useEffect(() => {
        const availableMesas = getAvailableMesasForThatDate({ selectedDate: startDate, mesas: mesas.data })
        setMesasDisponibles(availableMesas)        
    }, [startDate])

    return ( 
        <>
            <main className=''>
                <form className='container' style={{ width: 600 }}>                    
                    <PizarraMesas
                        mesas={mesas.data}
                        mesasDisponibles={mesasDisponibles}
                        
                        onSelectMesa={setMesa}
                    />
                    <div className="text-center">
                        {mesa && (
                            <>
                                <div>Seleccionaste la mesa: <b> {getMesasById(mesa).number_name} </b> </div>
                                <button type='button' className='btn btn-info' onClick={saveReserva}>Reservar!</button>
                            </>
                        )}
                    </div>
                </form>
            </main>
        </>
    )
}



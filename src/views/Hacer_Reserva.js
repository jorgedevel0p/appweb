import React, { useState, useContext, useEffect } from 'react'
import { DateTime } from 'luxon'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Footer } from '../components/Footer'
import { Layout_Cliente, PizarraMesas } from '../components'
import Fondo_Cliente from '../assets/Fondo_Cliente.png'
import restaurantContext from '../context/restaurantContext'
import { getAvailableMesasForThatDate } from '../utils/ReservasChecker'
import { useHttpRequest } from '../hooks/useHttpRequest'

export const Hacer_Reserva = () => {
  const { makeHttpRequest } = useHttpRequest()
  const { mesas, getMesasById, getMesas } = useContext(restaurantContext)
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
      user: localStorage.getItem('id') ?? 1,
      date: reservaDate.toISODate(),
      time: reservaDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS),
      date_reserva: reservaDate.toISO()
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
        alert(data, 'Ha guardado Reserva correctamente')
        mesasDisponibles();
        getMesas()
      }
    }) 
    
  }

  useEffect(() => {
    const availableMesas = getAvailableMesasForThatDate({ selectedDate: startDate, mesas: mesas.data })
    setMesasDisponibles(availableMesas)
  }, [startDate, mesas])

  return (
    <>
      <Layout_Cliente>
        <div>
          <img src={Fondo_Cliente} className="card-img mb-5" height={140} />
        </div>
        <form className='container' style={{ width: 400 }}>
          <div className="row row-cols-12 mb-2">
            <div className="col mb-3">
              <label className='form-label'>Fecha a reservar</label>
              <DatePicker
                className='form-control'
                selected={startDate}
                showTimeSelect
                dateFormat="MMMM dd - h:mm aa"
                onChange={date => setStartDate(date)}
                minDate={new Date()}
              />
            </div>
          </div>
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
      </Layout_Cliente>
      <Footer />
    </>
  )
}

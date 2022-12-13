import { DateTime } from 'luxon'
import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useHttpRequest } from '../hooks/useHttpRequest'
import restaurantContext from '../context/restaurantContext'
import { AlertInfo } from '../utils/Alert'
import { FormCheck } from 'react-bootstrap'


export const PedidoMesa = () => {
  const navigate = useNavigate()
  const { mesas } = useContext(restaurantContext)
  const [carrito, setCarrito] = useState([])
  const [mesa, setMesa] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const { makeHttpRequestPromise } = useHttpRequest()

  const getMontoTotalCarrito = () => {
    return carrito.reduce((a, v) => (a += v.value), 0);
  }

  const getChileFormatMoney = monto => {
    return new Intl.NumberFormat('cl-CL', { style: 'currency', currency: 'CLP' }).format(monto)
  }

  const realizarPedido = async () => {
    const dateNow = DateTime.now()
    const dateNow2 = DateTime.now().plus({ hours: 2 })

    if (!mesa) {
      AlertInfo({ text: 'Selecciona una mesa para continuar', icon: 'warning', title: 'En que mesa estás ?' })
      return
    }

    setIsLoading(true)

    const ordenRequest = {
      start_time: dateNow.toLocaleString(DateTime.TIME_24_WITH_SECONDS),
      mesa: Number(mesa),
      date: dateNow.toISO(),
      // start_time: '00:00:00',
      end_time: dateNow2.toLocaleString(DateTime.TIME_24_WITH_SECONDS),
      /* date: dateNow.toISODate(), */
      number_people: 999,
      state: true
    }
    console.log(ordenRequest, 'orden')
    let respuestaOrden = null

    try {
      respuestaOrden = await makeHttpRequestPromise({ operation: '/orden/', data: ordenRequest, method: 'POST' })

    } catch (error) {
      console.log(error, 'error al guardar orden!')
      AlertInfo({ text: 'Problemas de conexión', icon: 'error', title: 'Error al guardar orden' })
      setIsLoading(false)
      return
    }

    console.log(respuestaOrden.data.id, 'dataorden')


    const ordenId = respuestaOrden.data.id // <--- se obtiene ID de la orden para usarlo mas abajo

    const detalleOrdenBatch = carrito.map(plato => {
      const detalleOrdenRequest = {
        orden: ordenId,
        plato: plato.id,
        producto: plato.id ? plato.id : null,
        number_dish: 1, /// ---- que es esto?
      }
      return makeHttpRequestPromise({ operation: '/detalle_orden/', data: detalleOrdenRequest, method: 'POST' })
    })

    console.log('iniciando guardado de detalleOrdenes')

    try {
      await Promise.all(detalleOrdenBatch)
    } catch (error) {
      AlertInfo({ text: 'Problemas de conexión', icon: 'error', title: 'Error al guardar detalles ordenes' })
      setIsLoading(false)
      return

    }

    setIsLoading(false)

    // limpiar localStorage
    localStorage.removeItem('carrito')

    // entrega feedback
    AlertInfo({ text: 'La orden ya está en la cocina!', icon: 'success', title: 'Orden creada Ok' })

    // volver a pantalla de pedidos
    navigate('/menuMesa')
  }


  useEffect(() => {
    const carritoLocalStorage = localStorage.getItem('carrito')
    const carritoData = JSON.parse(carritoLocalStorage)

    if (carritoData) {
      setCarrito(carritoData)
    }
  }, [])


  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-3">
        <h1 className='text-white m-2'>Detalle</h1>

        <Link to='/menuMesa'>
          <a href="#" className="nav-link text-white">

            <i className="fa-solid fa-utensils m-2" style={{ color: '#ffffff' }}></i>
            Volver a Menú
          </a>
        </Link>

      </nav>
      <div className="container text-center">
        <h4 className='mt-4'>Mi carrito</h4>

        <div class="row">

          <div class="col-sm-12 col-md-8">
            <ul class="list-group list-group-flush">
              {carrito.map((plato, index) => (
                <li key={index} class="list-group-item text-start">
                  <img src={plato.image_plato} class="rounded float-start mr-2" style={{ height: 25, width: 35 }}></img>
                  <span className='m-5'>1</span>
                  <span className='m-5' >{plato.name}</span>
                  <span className='m-5'> ${plato.value}</span>

                </li>
              ))}
            </ul>
          </div>

          <div class="col-sm-12 col-md-4">

            <div class="card" style={{ height: '100%' }}>
              <div class="card-header">
                Detalle pedido
              </div>
              <div class="card-body">
                <p>Monto total: {getChileFormatMoney(getMontoTotalCarrito())} </p>
                {/* <p>Propina sugerida: --- por hacer... --- </p> */}


                <div className="mb-3" style={{ paddingLeft: 100, paddingRight: 100 }}>
                  <label for="user" class="form-label text-center">Numero Mesa</label>
                  <select
                    type='text'
                    name='mesa'
                    className='form-control'
                    value={mesa?.number_name}
                    onChange={e => setMesa(e.target.value)}
                  >
                    <option value='' disabled selected>Mesa...</option>
                    {mesas.data.map(mesa => (
                      <option value={mesa.id}>{mesa?.number_name}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  class="btn btn-success btn-lg mt-5"
                  disabled={isLoading}
                  onClick={realizarPedido}>Realizar mi pedido

                  {
                    isLoading && (
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    )
                  }


                </button>


              </div>


            </div>

          </div>

        </div>




      </div>
    </>
  )
}
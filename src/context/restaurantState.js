import React, { useEffect, useReducer } from 'react'
import restaurantReducer from './restaurantReducer'
import RestaurantContext from './restaurantContext'
import { useHttpRequest } from '../hooks/useHttpRequest'

/* const DUMMY_MESAS_DATA = [
  {
    "id": 1,
    "number_name": "1",
    "capacity": 2,
    "available": false,
    "user": 2,
    "reservas_mesa": []
  },
  {
    "id": 2,
    "number_name": "2",
    "capacity": 5,
    "available": true,
    "user": 2,
    "reservas_mesa": []
  },
  {
    "id": 5,
    "number_name": "5",
    "capacity": 5,
    "available": true,
    "user": 2,
    "reservas_mesa": [
      {
        "id": 24,
        "status": "Reservado",
        "date": "2022-03-14",
        "time": "13:30:00",
        "date_reserva": "2022-11-17T12:00:00Z"
      },
    ],
  },
] */

import {
  GET_MESAS_SUCCESS,
  GET_RESERVAS_SUCCESS,
  GET_MESAS_LOADING,
  GET_MESAS_ERROR

} from './types'

const fetchingStatus = {
  loading: false,
  success: false,
  error: false,
  errorInfo: null
}

const INITIAL_STATE = {
  reservas: {
    data: [],
    fetchingStatus
  },
  mesas: { data: [], fetchingStatus },
}

const RestaurantState = (props) => {
  const [state, dispatch] = useReducer(restaurantReducer, INITIAL_STATE)
  const { makeHttpRequest } = useHttpRequest()

  function getResourcesByName(resource) {
    return new Promise((resolve, reject) => {
      makeHttpRequest({
        operation: `/${resource}/`,
        data: null,
        method: 'GET',
        callback: ({ ok, data }) => {
          if (!ok) reject(new Error('error al obtener datos'))
          console.log(data)
          resolve(data)
        }
      })
    })
  }

  async function getMesas() {
    try {
      dispatch({ type: GET_MESAS_LOADING })
      const mesas = await getResourcesByName('mesa')
      dispatch({ 
        type: GET_MESAS_SUCCESS, 
        payload: mesas 
      })
    } catch (error) {
      dispatch({ type: GET_MESAS_ERROR })
    }
  }

  useEffect(() => {
    getMesas()
  }, [])

  function getMesasById(id) {
    return state.mesas.data.find(mesa => mesa.id === id)
  }

  return (
    <RestaurantContext.Provider
      value={{
        mesas: state.mesas,
        getMesas,
        getMesasById
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantState


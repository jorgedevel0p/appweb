import React, { useEffect, useReducer } from 'react'
import restaurantReducer from './restaurantReducer'
import RestaurantContext from './restaurantContext'
import { useHttpRequest } from '../hooks/useHttpRequest'

import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_PLATOS_SUCCESS

} from './types'
// import { stat } from 'original-fs'

const fetchingStatus = {
  loading: false,
  success: false,
  error: false,
  errorInfo: null
}

const INITIAL_STATE = {
  users: {
    data: [],
    fetchingStatus
  },
  proveedores: {
    data: [],
    fetchingStatus
  },
  productos: {
    data: [],
    fetchingStatus
  },
  platos: {
    data: [],
    fetchingStatus
  }
}

const RestaurantState = (props) => {
  const [state, dispatch] = useReducer(restaurantReducer, INITIAL_STATE)
  const { makeHttpRequest } = useHttpRequest()

  function getUserById(id) {
    return state.users.data.find(user => user.id === id)
  }

  function getPlatosById(id) {
    return state.platos.data.find(plato => plato.id === id)
  }

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

  function getUsers(){
    getResourcesByName('user').then(res => dispatch({ type: GET_USERS_SUCCESS, payload: res }))
  }

  function getPlatos(){
    getResourcesByName('plato').then(res => dispatch({ type: GET_PLATOS_SUCCESS, payload: res }))
  }

  useEffect(() => {
    
    getUsers()
    getPlatos()

  }, [])



  return (
    <RestaurantContext.Provider
      value={{
        users: state.users,
        platos: state.platos,
        getUsers,
        getPlatos,
        getPlatosById,
        getUserById
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantState


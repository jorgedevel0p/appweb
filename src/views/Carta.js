import React, { useEffect, useState } from 'react'
import { useHttpRequest } from '../hooks/useHttpRequest'
import { Navbar_Inicio, Plato } from '../components'

export const Carta = () => {
  const [platos, setPlatos] = useState([])
  const { makeHttpRequest } = useHttpRequest()

  const getPlatos = () => {
    makeHttpRequest({
      operation: '/plato/',
      data: null,
      method: 'GET',
      callback: ({ ok, data }) => {
        if (!ok) {
          console.log(data, 'error al obtener platos')
          return
        }
        setPlatos(data)
        console.log(data, 'Listado de Platos recibido')
      }
    })
  }

  useEffect(() => {
    getPlatos()
  }, [])

  return (
    <>
      <Navbar_Inicio />
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-4 pt-4">
          {platos.map(plato => (
            <Plato
              image={plato.image_plato}
              title={plato.name}
              description={plato.description}
              price={plato.value}
              buttonText={'Agregar'}
              onPress={() => console.log(plato)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

import React, { useEffect, useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { PlatoVenta } from '../components'
import restaurantContext from '../context/restaurantContext'

export const MenuMesa = () => {
  const nameUser = localStorage.getItem('name')
  const { productos } = useContext(restaurantContext)
  const [carrito, setCarrito] = useState([])

  const addProductToCarrito = (producto) => {
    setCarrito([
      ...carrito,
      producto
    ])
  }

  const deleteFromCarrito = (producto) => {
    const indexToDelete = carrito.findIndex(productoCarro => productoCarro.id === producto.id)
    const arrayMapping = [...carrito]
    arrayMapping.splice(indexToDelete, 1)
    setCarrito(arrayMapping)
  }

  const countProductIntoCarrito = (productoId) => {
    return carrito.reduce((a, v) => (v.id === productoId ? a + 1 : a), 0);
  }

  const saveCarritoIntoLocalStorage = () => {
    const dataString = JSON.stringify(carrito)
    localStorage.setItem('carrito', dataString)
  }

  return (
    <>

      <nav className="navbar navbar-dark bg-dark p-3">
        <h1 className='text-white m-2'>Menú</h1>
        <h4 className='text-white'> Hola, {nameUser}. ¡Selecciona tu Pedido!</h4>
        <NavLink>
          <Link to='/LoginMesa'>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-right-from-bracket m-2" style={{ color: '#ffffff' }}></i>
              Cerrar Sesión
            </a>
          </Link>
          <Link to='/pedidoMesa' onClick={saveCarritoIntoLocalStorage}>
            <a href="#" className="nav-link text-white">
              <i className="fa-solid fa-circle-info m-2" style={{ color: '#ffffff' }}></i>
              Ir a Pagar: <strong>{carrito?.length} </strong> Productos Añadidos
            </a>
          </Link>
        </NavLink>
      </nav>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-2 g-2 g-lg-4 pt-4">
          {productos.fetchingStatus.success && productos.data.map(plato => (
            <PlatoVenta
              image={plato.image_plato}
              title={plato.name}
              description={plato.description}
              price={plato.value}
              buttonText={'Agregar'}
              onPress={() => addProductToCarrito(plato)}
              buttonEliminar={`Quitar 1 de ${countProductIntoCarrito(plato.id)}`}
              onPressE={() => deleteFromCarrito(plato)}
            />
          ))}
        </div>
      </div>

    </>
  )
}


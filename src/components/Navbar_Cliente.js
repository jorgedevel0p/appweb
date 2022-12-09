import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar_Cliente = () => {

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280, height: 850}}>
            <Link to="/clientes">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"></svg>
                    <span className="fs-4">Cliente</span>
                </a>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <Link to='/clientes'>
                        <a href="#" className="nav-link text-white">
                            <i className="fa-solid fa-home m-2" style={{ color: '#ffffff' }}></i>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to='/hacerReserva'>
                        <a href="#" className="nav-link text-white">
                            <i className="fa-solid fa-calendar-check m-2" style={{ color: '#ffffff' }}></i>
                            Nueva Reserva
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/misReservas'>
                        <a href="#" className="nav-link text-white" aria-current="page">
                            <i className="fa-solid fa-book-open m-2" style={{ color: '#ffffff' }}></i>
                            Listado Reservas
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <a href="#" className="nav-link text-white">
                            <i className="fa-solid fa-right-from-bracket m-2" style={{ color: '#ffffff' }}></i>
                            Cerrar Sesión
                        </a>
                    </Link>
                </li>
            </ul>        
        </div>
    )

}
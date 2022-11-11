import React, { useContext } from 'react'
import { Layout_Cliente } from './components/index'
import Fondo_Cliente from './assets/Fondo_Cliente.png'
import restaurantContext from './context/restaurantContext'

export const Clientes = () => {
    return (
        <>
            <Layout_Cliente>
                <div>
                    <img src={Fondo_Cliente} className="card-img" height={140} />
                </div>
                <h1 className="text-center mt-3">
                    Restaurant Siglo XXI
                </h1>
                <hr></hr>
                <form className='container' >
                    <div className="row row-cols-3 my-2">
                        <div className='col-6'>
                            <div className="alert alert-info mx-1" role="alert">
                                Recuerda que puedes hacer una reserva desde la Web
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="alert alert-info mx-1" role="alert">
                                Tenemos los mejores platos, postres y tragos
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="alert alert-info mx-1" role="alert">
                                Siempre es un buen día para un volcán de chocolate
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="alert alert-info mx-1" role="alert">
                                Puedes celebrar con nosotros cada momento especial para ti
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="alert alert-info mx-1" role="alert">
                                Si tienes inconvenientes, puedes cancelar tu reserva
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="alert alert-info mx-1" role="alert">
                                Desde el restaurante también puedes reservar una mesa según disponibilidad
                            </div>
                        </div>
                    </div>
                </form>
            </Layout_Cliente>
        </>
    )
}
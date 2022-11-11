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
                        <div class="alert alert-success mx-1" role="alert">
                            Cuida tu salud visual. Toma un descanso de vez en cuando
                        </div>
                        <div class="alert alert-success mx-1" role="alert">
                            Adopta una postura adecuada
                        </div>
                        <div class="alert alert-success mx-1" role="alert">
                            Tus muñecas también son importantes, cuidalas!
                        </div>
                        <div class="alert alert-success mx-1" role="alert">
                            Ten una buena hidratación. El agua ayuda a la concentración.
                        </div>
                        <div class="alert alert-success mx-1" role="alert">
                            No olvides socializar. La comunicación es importante para un buen lugar de trabajo
                        </div>
                        <div class="alert alert-success mx-1" role="alert">
                            Realiza estiramientos para no tener dolores lumbares
                        </div>
                    </div>
                </form>
            </Layout_Cliente>
        </>
    )
}
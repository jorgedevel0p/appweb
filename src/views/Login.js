import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Navbar_Inicio } from '../components'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'
//import { useState,useEffect } from 'react'
//import { ClipLoader  } from 'react-spinners'

export const Login = () => {
  const navigate = useNavigate()
  const { isLoading, error, makeHttpRequest } = useHttpRequest()

  const ROUTES_DEPEND_ON_TYPE = {
    Cliente: '/clientes',
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (evento) => {
    const value = evento.target.value
    setUsername(value)
  }

  const handlePassword = (evento) => {
    const value = evento.target.value
    setPassword(value)
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()

    const data = {
      username: username,
      password: password,

    }

    makeHttpRequest({
      operation: '/token',
      data: data,
      method: 'POST',
      callback: (respuestaApi) => {
        const { ok, data } = respuestaApi
        if (!ok) {
          alert('Datos incorrectos. Intente nuevamente')
          console.log(JSON.stringify(data))
          return
        }
        localStorage.setItem('type_user', data.type)
        localStorage.setItem('token', data.access)
        localStorage.setItem('username', data.username)
        localStorage.setItem('id', data.id)
        localStorage.setItem('name', data.name)
        localStorage.setItem('email', data.email)

        console.log({ data })

        console.log(data.type)

        const routeToNavigate = ROUTES_DEPEND_ON_TYPE[data.type]
        console.log(routeToNavigate)
        navigate(routeToNavigate)
      }
    })
  }
//function login(){
//  const [loading , setLoading] = useEffect(false)
//  useEffect(()=>{
//    setLoading(true)
 //   setTimeout(() => {
   //   setLoading(false)
      
    //}, 5000);

  //},[])

//}

  return (
    

    

    <>
    <nav className='bg-black'>
        <div className="row justify-content-center ">
          <Link to='/' className='text-decoration-none'>
            <a href="#" className="nav-link text-white my-3 mx-5 fs-5 ">RESTAURANT SIGLO XXI</a>
          </Link>
        </div>


      </nav>
      <main className="py-5 px-4">
        <div className="container mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="'card '">
              <div className="card-header text-center">
                <h4>Iniciar Sesión</h4>
              </div>
              <div className="card-body">
                <form>

                  <div className="form-group">
                    <label for="user">Usuario</label>
                    <input name="user" id="user" className="form-control" type="string" value={username} onChange={handleUsername} />
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col-3">
                        <label for="password">Contraseña</label>
                      </div>
                    </div>
                    <input name="password" id="password" className="form-control" type="password" value={password} onChange={handlePassword} />
                  </div>

                  <div className="form-group mt-4 text-center">
                    {
                      isLoading
                        ?
                        
                        (<div className="spinner-border text-primary" role="status">
                         
                         
                        </div>)
                        : (<button className='btn col-6 btn-primary btn-block' type='button' onClick={handleSubmit} /* disabled={!username || !password} */>Ingresar
                         <span class="spinner-border spinner-border-sm" role="status" aria-hidden="false"></span>
                         <span class="sr-only">Loading...</span>
                        
                        </button>)
                        
                    }
                    
                  </div>
                  
                </form>
                

                {/* <p className="text-center">O</p> */}

                <div className="form-group  text-center">
                  <Link to='/Registro'>
                  <a href="#" className="btn col-6 btn-success btn-block mt-2">Registrarse</a></Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>

  )

}

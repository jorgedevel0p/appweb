import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Navbar_Inicio } from '../components'
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'


export const LoginMesa = () => {
  const navigate = useNavigate()
  const { isLoading, error, makeHttpRequest } = useHttpRequest()

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
        localStorage.setItem('username', "Cliente")
        localStorage.setItem('id', "7")
        localStorage.setItem('name', "Cristiano Ronaldo")
        localStorage.setItem('email', data.email)
        if(data.username != 'Cliente'){
          alert('Intente nuevamente con una cuenta de cliente')
          console.log(JSON.stringify(data))
          return
        }

        console.log({ data })

        console.log(data.type)
        navigate('/menuMesa')


      }
    })
  }

  return (
    <>
      <main className="py-5 px-4">
        <div className="container col-sm-8 mt-5">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-header text-center text-white bg-dark">
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
                </form>
              </div>
              <div className='card-body bg-black text-white text-center'>
                <div className="form-group  text-center">
                  <div className='row'>
                    <div className='col-12'>
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
                  </div>
                  <div className='col-12'>
                    {/* <p className="text-center">O</p> */}
                    <div className="form-group my-2 text-center">
                      <Link to='/registroMesa'>
                        <a href="#" className="btn col-6 btn-light btn-block ">Registrarse</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Footer } from '../components/Footer'
import { useHttpRequest } from '../hooks/useHttpRequest'

const DEFAULT_STATE = {
  id: '',
  username: '',
  name: '',
  last_name: '',
  email: '',
  type: 'Cliente',
  password: '',
}

export const RegistroMesa = () => {
  const navigate = useNavigate()
  const { isLoading, error, makeHttpRequest } = useHttpRequest()
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState(DEFAULT_STATE)


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (evento) => {
    evento.preventDefault()
    console.log(form)

    makeHttpRequest({
      operation: '/user/',
      data: form,
      method: 'POST',
      callback: ({ ok, data }) => {
        if (!ok) {
          alert('Verifica los datos ingresados. Intenta nuevamente')
          console.log(JSON.stringify(data))
          return
        }


        localStorage.setItem('type_user', form.type)
        localStorage.setItem('token', form.access)
        localStorage.setItem('username', form.username)
        localStorage.setItem('id', form.id)
        localStorage.setItem('name', form.name)
        localStorage.setItem('email', form.email)
        console.log(form, 'Ha guardado Usuario correctamente')

        console.log(form.type)
        navigate('/menuMesa')

      }
    })
  }


  return (
    <>
      <main className="py-3">
        <div className='container col-sm-8 col-lg-6 my-4 '>
          <div className="col-md-12 offset-md-12">
            <div className='card mb-4'>
              <div className="card-header text-center text-white bg-dark">
                <h4>Registrate</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className='form-group'>
                    <div className='row'>
                      <div className='col-12'>
                        <label>Username</label>
                        <input
                          type='text'
                          className='form-control mb-2'
                          value={form.username}
                          name='username'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12'>
                        <label>Nombre</label>
                        <input
                          type='text'
                          className='form-control mb-2'
                          value={form.name}
                          name='name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12'>
                        <label>Apellido</label>
                        <input
                          type='text'
                          className='form-control mb-2'
                          value={form.last_name}
                          name='last_name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12'>
                        <label>Email</label>
                        <input
                          type='email'
                          className='form-control mb-2'
                          value={form.email}
                          name='email'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12'>
                        <label>Contraseña</label>
                        <input
                          type='password'
                          className='form-control mb-2'
                          value={form.password}
                          name='password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className='card-body bg-dark'>
                <div className='form-group text-center my-2'>
                  <div className='row '>
                    <div className='col-12'>
                      <button
                        type='button'
                        className='btn col-6 btn-secondary btn-block'
                        onClick={handleSubmit}>
                        Guardar
                      </button>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <Link to='/loginMesa'>
                        <a href="#"
                          className="btn col-6 btn-light btn-block mt-2">
                          ¿Tienes cuenta? Inicia Sesión!</a>
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

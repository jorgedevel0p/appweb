const API_SIGLO_XXI_URL = 'https://django-server-production-5539.up.railway.app/api'
const STATUS_CODE_OK = 200

export const useHttpRequest = () => {

  const makeHttpRequest = ({ operation, data, method, callback }) => {
    const savedToken = localStorage.getItem('token')

    let headers = {
      'Content-Type': 'application/json'
    }

    if (savedToken && operation !== '/token') {
      headers.Authorization = `Bearer ${savedToken}`
    }

    let options = {
      method: method,
      headers,
    }

    if (data) { options.body = JSON.stringify(data) }
    const endpointUrl = `${API_SIGLO_XXI_URL}${operation}` // <--- es lo mismo que: API_SIGLO_XXI_URL + operation (contatenar strings)

    fetch(endpointUrl, options)

      .then(res => {
        if (!res.ok || res.status !== STATUS_CODE_OK) {
          return res.text().then(text => { throw new Error('Username y/o contraseña incorrecta. Intenta nuevamente!', text) })
        } else {
          return res.json()
        }
      })
      .then(respuesta => {
        callback({
          ok: true,
          data: respuesta
        })
      })
      .catch(error => {
        callback({
          ok: false,
          data: error
        })
      })
  }

  const makeHttpRequestPromise = ({ operation, data, method }) => {

    return new Promise((resolve, reject) => {

      const savedToken = localStorage.getItem('token')

      let headers = {
        'Content-Type': 'application/json'
      }

      if (savedToken && operation !== '/token') {
        headers.Authorization = `Bearer ${savedToken}`
      }

      let options = {
        method: method,
        headers,
      }

      if (data) { options.body = JSON.stringify(data) }
      const endpointUrl = `${API_SIGLO_XXI_URL}${operation}` // <--- es lo mismo que: API_SIGLO_XXI_URL + operation (contatenar strings)

      fetch(endpointUrl, options)

        .then(res => {
          if (!res.ok || res.status !== STATUS_CODE_OK) {
            return res.text().then(text => { throw new Error('Error en http request', text) })
          } else {
            return res.json()
          }
        })
        .then(respuesta => {
          resolve({
            ok: true,
            data: respuesta
          })
        })
        .catch(error => {
          reject({
            ok: false,
            data: error
          })
        })

    })


  }


  return {
    makeHttpRequest,
    makeHttpRequestPromise
  }

}
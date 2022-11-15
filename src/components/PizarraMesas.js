import React from 'react'

export const PizarraMesas = ({ mesas, mesasDisponibles, onSelectMesa }) => {
  const getIsMesaDisabled = (id) => {
    const isOk = mesasDisponibles.some(mesa => mesa.id === id)
    return isOk
  }

  return (
    <div className='col mb-3'>
      <h6 for="pizarraMesas" class="form-label text-center mb-4">Mesa a reservar</h6>
      <div className='pizarraM card'>
        {mesas.map(mesa => (
          <button
            key={mesa.id}
            type='button'
            className={`btn btn-success mesaPizarra`}
            disabled={!getIsMesaDisabled(mesa.id)}
            onClick={() => onSelectMesa(mesa.id)}
          >
            <div>Mesa {mesa.number_name}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

import React from 'react'

export const PlatoVenta = ({ image, title, description, price, buttonText, onPress, buttonEliminar, onPressE }) => {
  


  
  return (
    <div className="col-sm-6 col-md-8">
    <div className="platoCard">

      <figure className='imgContainer'>
        <img src={image} />
      </figure>

      <div className='infoContainer'>
        <h6>{title}</h6>
        <div className="multi-line-truncate" >
          {description}
        </div>
        <p className='platoPrice'>
          ${price}
        </p>

        <button type="button" className="btn btn-sm btn-success btnPlatoCard" onClick={onPress}>
          {buttonText}
        </button>
        <button type="button" className="btn btn-sm btn-secondary btnPlatoCard" onClick={onPressE}>
          {buttonEliminar}
        </button>

      </div>
    </div>
    </div>
  )
}
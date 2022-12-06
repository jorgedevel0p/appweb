import React from 'react'

export const PlatoVenta = ({ image, title, description, price, buttonText, onPress, buttonEliminar, onPressE }) => {
  
  

  var cart = {
    items: [],
    addItem: function(item) {
      this.items.push(item);
    },
    removeItem: function(item) {
      var index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    getTotal: function() {
      var total = 0;
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    },
    getButtonText: function() {
      if (this.items.length === 0) {
        return 'Add to Cart';
      } else {
        return 'Remove from Cart';
      }
    }
  };



  
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
import React, { Component } from 'react';
/*falta agregar descripcion */

const ItemDetail = ({detail}) => {
     console.log(detail)

    return (
      <div>
          <h4>Detalle de producto</h4>
           <div className='card m-2' style={{ width: '16rem' }}>
                <img src={detail.img} />
                <div className='card-body'>
                    <p>{detail.name}</p>
                    <h5>Precio: $<span>{detail.precio}</span></h5>
                    <p>Descripcion: {detail.description}</p>
                </div>
            </div> 
        </div> 
    )
}

export default ItemDetail
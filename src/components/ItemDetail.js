import React, { Component } from 'react';
import Contador from './ItemCount';
//falta agregar descripcion 

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
                    <Contador stock="5" initial={1} />
                    <button className="btn btn-outline-dark m-2">Agregar al carrito</button>
                    <button>Volver a Inicio</button>
                </div>
            </div> 
        </div> 
    )
}

export default ItemDetail
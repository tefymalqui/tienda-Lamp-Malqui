import React, { Component } from 'react';

const ItemDetail = (productos) => {

    return (
        <div>
            <div className='card m-2' style={{ width: '16rem' }}>
                <img src={productos.img} />
                <div className='card-body'>
                    <p>{productos.name}</p>
                    <h5>Precio: $<span>{productos.precio}</span></h5>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
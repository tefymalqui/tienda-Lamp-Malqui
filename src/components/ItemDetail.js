import React, { Component, useContext, useState} from 'react';
import Contador from './ItemCount';
import { Link } from 'react-router-dom';
//falta agregar descripcion 

const ItemDetail = ({ name,precio, description, stock, img }) => {

    const [count, setCount] = useState(1)


    const onAdd = () => {
        const itemToCart = {
           name,
           precio,
           description,
           stock,
        }
        console.log (itemToCart)
    }
    return (
        <div>
            <h4>Detalle de producto</h4>
            <div className='card m-2' style={{ width: '16rem' }}>
                <img src={img} />
                <div className='card-body'>
                    <p>{name}</p>
                    <h5>Precio: $<span>{precio}</span></h5>
                    <p>Descripcion: {description}</p>
                   <Contador 
                   stock={stock} 
                   initial={1} 
                   onAdd={onAdd}
                   name= {name}
                   count= {count}
                   setCount={setCount}
                   />
                   <Link to='/cart'>Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
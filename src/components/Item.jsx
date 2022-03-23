import React from 'react';
import Contador from './ItemCount';

const Item = ({ productos }) => {
    const onAdd = () => {
       console.log('')
    }
    return (
        <div className='card m-1' style={{ width: '14rem' }}>
            <img src={productos.img} />
            <div className='card-body'>
                <p>{productos.name}</p>
                <p>${productos.precio}</p>
                <Contador stock="5" initial={1} />
            </div>
        </div>
    )
}


export default Item
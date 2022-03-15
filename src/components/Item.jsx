import React from 'react';
import Contador from './ItemCount';

const Item = ({ productos }) => {
    const onAdd = () => {

    }
    return (
        <div className='card m-2' style={{ width: '16rem' }}>
            <img src={productos.img} />
            <div className='card-body'>
                <p>{productos.name}</p>
                <Contador stock="5" initial={1} />
            </div>
        </div>
    )
}


export default Item
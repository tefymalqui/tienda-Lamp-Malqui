import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ productos }) => {
    const navigate = useNavigate () ;
    
    return (
        <div className='card m-1' style={{ width: '14rem' }}>
            <div style={{backgroundImage:`url('${productos.img}')`}} className='cardImg'/>
            <div className='card-body'>
                <p>{productos.name}</p>
                <p>${productos.precio}</p>
                <button onClick={()=>navigate(`/detalle/${productos.id}`)} className="btn btn-outline-dark m-1">Ver Detalle</button>
            </div>
        </div>
    )
}

export default Item
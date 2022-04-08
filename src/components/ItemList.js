import React from 'react';
import Item from './Item';

const ItemList = ({listProducts}) => {

    return (
            <div className='d-flex justify-content-between flex-wrap'>
                { listProducts.map((productos) => <Item productos={productos} key={productos.id}/>)}
            </div>
    )
}

export default ItemList
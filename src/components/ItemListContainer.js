import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
   return (
       <div className='container'>
           <h2>
              Bienvenidos a {props.inicio}
           </h2>
           <ItemList />
       </div>
   )
} 

export default ItemListContainer;

import React from 'react';
import Contador from './ItemCount';

const ItemListContainer = (props) => {
   return (
       <div>
           <h2>
              Bienvenidos a {props.inicio}
           </h2>
           <Contador stock="5" initial={1}/>
       </div>
   )
} 

export default ItemListContainer;

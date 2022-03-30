import React from 'react';
import { Link } from 'react-router-dom';


const Cart = () => {
    
    return (
        <div>
            <h3>Carrito</h3>
           <Link to='/productos'>
               <button className="btn btn-outline-dark m-2"> Seguir Comprando</button>
           </Link>
        </div>
    )
}
export default Cart
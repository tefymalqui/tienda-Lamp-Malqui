import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext.js';

const Cart = () => {
    const carritoContext = useContext(CartContext);
    console.log('productos carrito', carritoContext.productsCart)
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
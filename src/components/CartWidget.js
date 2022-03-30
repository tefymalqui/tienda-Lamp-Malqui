import React, { useContext } from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
    const navigate = useNavigate ()

    const {quantityCart} = useContext(CartContext)

    return (
        <button onClick={()=>navigate(`/cart`)} type="button" className="btn btn-outline-light">
            <BsFillCartFill />
            <span>{quantityCart()}</span>
        </button>
    )
}
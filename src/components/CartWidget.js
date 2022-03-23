import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const CartWidget = () => {
    const navigate = useNavigate ()
    return (
        <button onClick={()=>navigate(`/cart`)} type="button" className="btn btn-outline-light">
            <BsFillCartFill />
        </button>
    )
}
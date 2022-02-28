import React from 'react';
import { BsFillCartFill } from "react-icons/bs";


export const CartWidget = () => {
    return (
        <button type="button" className="btn btn-outline-light">
            <BsFillCartFill />
        </button>
    )
}
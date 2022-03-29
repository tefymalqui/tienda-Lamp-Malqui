import React, { useState } from "react";
import CartContext from './CartContext';

const CustomCartContext = ({}) => {
    const [productsCart, setProductsCart] = useState([])
    //agregar al carrito
    const addItem = (item, quantity) => {
        const newProduct = {
            item,
            quantity
        }
        setProductsCart([...productsCart, newProduct]);
    }

    return (
        <div>
           <CartContext.Provider value={
          {productsCart,addItem}}>
             </CartContext.Provider>
        </div>
    )
}
export default CustomCartContext
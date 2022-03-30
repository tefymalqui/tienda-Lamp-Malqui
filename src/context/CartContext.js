import React, { useState } from "react";  
import { createContext } from "react";

export const CartContext = createContext();

export const CustomCart = ({children}) => {
    const [cart, setCart] = useState([])
    //console.log(cart)
    const addToCart = (item) => {
       setCart([...cart, item])
    }
    const isInCart = (id) => {
       return cart.some((productos) => productos.id === id)
    }
    const quantityCart = () => {
      return cart.reduce( (acc, productos)=> acc + productos.cantidad, 0 ) 
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            quantityCart
          }}>
              {children}
        </CartContext.Provider>
    )
}
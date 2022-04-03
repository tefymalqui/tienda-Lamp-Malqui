import React, { useState } from "react";  
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    //console.log(cart)
    const addToCart = (item) => {
       setCart([...cart, item])
    }

    const emptyCart = () => {
      setCart([])
    }

    const isInCart = (id) => {
       return cart.some((prod) => prod.id === id)
    }

    const quantityCart = () => {
      return cart.reduce((acc, prod)=> acc + prod.count, 0 ) 
    }

    const totalCart = () => {
      return cart.reduce((acc, prod) => acc + prod.count*prod.precio, 0)
    }

    const deleteItem = (id) => {
      setCart( cart.filter((prod) => prod.id !== id))
    }

    return(
        <CartContext.Provider value={{cart, addToCart, emptyCart, deleteItem, isInCart, quantityCart, totalCart}}>
              {children}
        </CartContext.Provider>
    )
}

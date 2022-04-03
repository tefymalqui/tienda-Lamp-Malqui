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
       return cart.some((productos) => productos.id === id)
    }

    const quantityCart = () => {
      return cart.reduce( (acc, productos)=> acc + productos.count, 0 ) 
    }

    const totalCart = () => {
      return cart.reduce((acc, productos) => acc + productos.count*productos.precio, 0)
    }

    const deleteItem = (id) => {
      setCart( cart.filter((productos) => productos.id !== id))
    }

    return(
        <CartContext.Provider value={{cart, addToCart, emptyCart, deleteItem, isInCart, quantityCart, totalCart}}>
              {children}
        </CartContext.Provider>
    )
}

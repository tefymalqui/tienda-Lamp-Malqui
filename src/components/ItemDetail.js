import React, { useContext, useState } from 'react';
import Contador from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext"
//falta agregar descripcion 

const ItemDetail = ({ id, name, precio, description, stock, img }) => {

    const [count, setCount] = useState(1)
    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const onAdd = () => {
        if (!isInCart(id)) {
            const itemToCart = {
                id,
                name,
                precio,
                description,
                stock,

            }
            addToCart(itemToCart)
        }
    }
    return (
        <div>
            <h4>Detalle de producto</h4>
            <div className='card m-2' style={{ width: '16rem' }}>
                <img src={img} />
                <div className='card-body'>
                    <p>{name}</p>
                    <h5>Precio: $<span>{precio}</span></h5>
                    <p>Descripcion: {description}</p>
                    {
                        isInCart(id)  ?
                            <Link to='/cart'>
                                <button className='btn'>Finalizar Compra</button>
                            </Link>
                            :
                            <>
                                <Contador
                                    stock={stock}
                                    initial={1}
                                    onAdd={onAdd}
                                    name={name}
                                    count={count}
                                    setCount={setCount}
                                />
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
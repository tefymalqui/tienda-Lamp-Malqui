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
        if (count === 0) return
        if (!isInCart(id)) {
            const itemToCart = {
                id,
                name,
                precio,
                description,
                stock,
                count
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
                        isInCart(id) ?
                            <Link to="/cart">
                                <button className="btn btn-outline-dark">Finalizar Compra</button>
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
                                <button onClick={onAdd} className="btn btn-outline-dark my-2">
                                    Agregar al Carrito
                                </button>

                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
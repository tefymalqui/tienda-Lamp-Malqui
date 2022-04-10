import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { BsDashCircleFill } from "react-icons/bs";

const Cart = () => {
    const { cart, totalCart, emptyCart, deleteItem } = useContext(CartContext)

    //render para el carrito vacio
    if (cart.length === 0) {
        return (
            <div className='container'>
                <h3>Carrito Vacio</h3>
                <Link to='/productos' className="btn btn-outline-dark m-2">Volver a Productos</Link>
            </div>
        )
    }
    return (
        <>
            <div className='container'>
                <h3>Carrito</h3>
                <hr />
                <table className='table table-sm '>
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                   <tbody>
                    {
                        cart.map((item) => (
                                <tr className='table-secondary' key={item.id}>
                                    <th key={item.id} scope='row'>{item.name} </th>

                                    <td> {item.count}</td>
                                    <td>${item.count * item.precio}</td>
                                    <td>
                                        <button onClick={() => { deleteItem(item.id) }} className="btn">
                                            <BsDashCircleFill />
                                        </button>
                                    </td>
                                </tr>
                        ))
                    }
                    </tbody>
                    <tr>
                        <th colSpan='3'></th>
                        <td >Total: ${totalCart()}</td>
                    </tr>
                </table>
                <div>
                    <Link to='/productos'>
                        <button className="btn btn-outline-dark m-2"> Seguir Comprando</button>
                    </Link>
                    <button className="btn btn-outline-dark m-2" onClick={emptyCart}> Vaciar Carrito </button>
                    <Link to="/checkout">
                        <button className="btn btn-outline-dark">Finalizar Compra</button>
                    </Link>
                </div>
            </div>
        </>

    )
}
export default Cart
import { collection, addDoc, getFirestore, updateDoc, doc, getDoc } from "firebase/firestore"
import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import {Link} from 'react-router-dom';


const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        apellido: "",
        email: "",
        phone: ""
    })

    const [id, setId] = useState(null)

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const generarOrden = async (e) => {
        e.preventDefault();
        let orden = {};
        orden.buyer = dataForm;
        orden.total = totalCart();

        orden.items = cart.map((cartItem) => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.precio * cartItem.count;

            return { id, nombre, precio };
        });

        const db = getFirestore();
        const queryCollectionOrders = collection(db, "orders");
        addDoc(queryCollectionOrders, orden)
            .then((res) => {

                cart.forEach((item) => {
                      const docRef = doc(db, 'items', item.id)
                      getDoc(docRef)
                      .then((dbDoc) => {
                          updateDoc(docRef, {stock: dbDoc.data().stock - item.count})
                      })
                })

                setId(res.id)})
            .catch((err) => console.log(err))
            .finally(() => emptyCart());
    };

    const { cart, totalCart, emptyCart } = useContext(CartContext)

    if (id){
        return(
            <div className="container"> 
            <label>Gracias por su compra su numero de seguimiento es: {id}</label>
            <hr/>
            <Link to="/" className="btn btn-outline-dark"> Volver </Link>
            </div>
        )
    }
    return (
        <div className="container">
            <form >
                <div className="form-group">
                    <label for="">Nombre:</label>
                    <input className="form-control" type="text" name="name" placeholder="Nombre" value={dataForm.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="">Apellido:</label>
                    <input className="form-control" type="text" name="apellido" placeholder="Apellido" value={dataForm.apellido} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="">Email:</label>
                    <input className="form-control" type="text" name="email" placeholder="Email" value={dataForm.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="">Telefono:</label>
                    <input className="form-control" type="text" name="phone" placeholder="Telefono" value={dataForm.phone} onChange={handleChange} />
                </div>

                <br />
                <button type="submit" className="btn btn-outline-dark m-2" onClick={generarOrden}>Comprar</button>
                {id && (
                    <label>
                        Gracias por su compra su numero de seguimiento es: {id}
                    </label>
                )}
            </form>
        </div>
    )
}

export default Checkout
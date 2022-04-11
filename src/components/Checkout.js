import { async } from "@firebase/util"
import { collection, addDoc, Timestamp, getFirestore } from "firebase/firestore"
import React, { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { db } from "../firebase/config"

 const Checkout =()=> {

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [id, setId] = useState(null)

    const handleChange = (e) =>{
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const generarOrden = async(e) => {
        e.preventDefault();
        let orden = {};
        orden.buyer = dataForm;
        orden.total = totalCart();

        orden.items = cart.map((cartItem) =>{
        const id = cartItem.id;
        const nombre = cartItem.name;
        const precio = cartItem.precio*cartItem.count;

        return{id, nombre, precio};
        });

        const db = getFirestore();
        const queryCollectionOrders = collection(db, "orders");
        addDoc(queryCollectionOrders, orden)
        .then((res) => setId(res.id))
        .catch((err) => console.log(err))
        .finally(()=> emptyCart());
    };

    const { cart, totalCart, emptyCart } = useContext(CartContext) 

    return (
        <div className="container">
            
            <form >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputAdrress">Nombre</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputAddress" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Tel</label>
                    <input type="tel" className="form-control" id="inputAddress2" placeholder="Telefono"/>
                </div>
                
                <button type="submit" className="btn btn-primary m-2" onClick={generarOrden}>Comprar</button>
                {id && (
                    <label>
                        El id de la compra es: {id}
                    </label>
                )}
            </form>
        </div>
    )
}

export default Checkout
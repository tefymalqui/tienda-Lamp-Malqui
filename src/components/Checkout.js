import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { db } from "../firebase/config"

const Checkout = () => {

    const { cart, totalCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    const sendOrder = () => {
         const orden = {
            name: values,
            items: cart,
            total: totalCart(),
            times: Timestamp.fromDate(new Date())
         }
         
         const ordersRef = collection(db, 'orders')
        
         addDoc(ordersRef, orden)
           .then((doc) => {
               console.log(doc.id)
           })
    }

    
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendOrder()
    }

    if (orderId){
        return(
            <>
            <p>Gracias por tu compra</p>
            <h3>Tu numero de orden es: {orderId}</h3>
            </>
        )
    }

    if (cart.length === 0){
        return <Navigate to="/productos" />
    }

    return (
        <div className="container">
            <p>Checkout</p>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputAdrress">Nombre</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Name" onChange={handleInputChange} value={values.name} name='nombre'/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputAddress" placeholder="Email" onChange={handleInputChange} value={values.email} name='email'/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Tel</label>
                    <input type="tel" class="form-control" id="inputAddress2" placeholder="Telefono" onChange={handleInputChange} value={values.tel} name='tel'/>
                </div>

                <button type="submit" className="btn btn-primary m-2">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout
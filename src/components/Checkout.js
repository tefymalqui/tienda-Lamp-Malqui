import { async } from "@firebase/util"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { db } from "../firebase/config"

const Checkout = () => {

    const { cart, totalCart} = useContext(CartContext)

    const sendOrder = async(e) => {
        e.preventDefault();
        const nombre = e.target[0].value;
        const email = e.target[1].value;
        const telefono = e.target[2].value;

        const newOrder ={
            buyer: {
                name: nombre,
                email,
                telefono
            },
            items: cart,
            total: totalCart(),
            date: Timestamp.fromDate(new Date())
        }
       console.log('newOrder', newOrder)
       //crear referencia de la coleccion
       const orderCollection = collection(db, 'orders');
       const docReference = await addDoc(orderCollection, newOrder);
       console.log('referencia', docReference)
    }
    

    if (cart.length === 0){
        return <Navigate to="/productos" />
    }

    return (
        <div className="container">
            <p>Checkout</p>
            <hr />

            <form onSubmit={sendOrder}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputAdrress">Nombre</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Name" name='nombre'/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputAddress" placeholder="Email" name='email'/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Tel</label>
                    <input type="tel" class="form-control" id="inputAddress2" placeholder="Telefono" name='tel'/>
                </div>

                <button type="submit" className="btn btn-primary m-2">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout
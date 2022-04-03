import React from "react";
import { Link } from "react-router-dom";

const Contador = ({ stock, initial, onAdd, count, setCount}) => {

    //const [count, setCount] = useState(initial)
    const aumentar = () => {
        if (count < stock)
            setCount(count + 1)
    }

    const disminuir = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    
    const reset = () => {
        setCount(initial)
    }

    return (
        <div>
            <div>
                <button onClick={disminuir} className="btn btn-outline-dark">-</button>
                <span className="m-2">{count}</span>
                <button onClick={aumentar} className="btn btn-outline-dark">+</button>
                <Link to='/cart'>
                <button onClick={() =>{onAdd(count);reset()}} className="btn btn-outline-dark my-2">Agregar al carrito</button>
                </Link>
                <Link to='/'>
                <button className="btn btn-outline-dark my-2">Volver a Inicio</button>
                </Link>
            </div>
        </div>
    )
}

export default Contador
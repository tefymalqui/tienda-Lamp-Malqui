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
            </div>
        </div>
    )
}

export default Contador
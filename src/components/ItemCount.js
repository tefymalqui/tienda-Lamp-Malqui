import React, { useState } from "react";

const Contador = ({ stock, initial }) => {

    const [count, setCount] = useState(initial)
    const aumentar = () => {
        if (count < stock)
            setCount(count + 1)
    }

    const disminuir = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <div>
                <button onClick={disminuir} className="btn btn-outline-dark">-</button>
                <span className="m-2">{count}</span>
                <button onClick={aumentar} className="btn btn-outline-dark">+</button>
            </div>
            <div>
                <button className="btn btn-outline-dark m-2">Agregar</button>
            </div>
        </div>
    )
}

export default Contador
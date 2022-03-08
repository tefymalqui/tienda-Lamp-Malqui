import React, { useState } from "react";

const Contador = ({stock, initial}) => {

    const [count, setCount] = useState(initial)
    const aumentar = () => {
       if(count < stock)
        setCount(count + 1)
    }

    const disminuir = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div>
            <p>Mesa ratona</p>
            <button onClick={disminuir} className="btn btn-outline-dark">-</button>
            <span className="m-2">{count}</span>
            <button onClick={aumentar} className="btn btn-outline-dark">+</button>
        </div>
    )
}

export default Contador
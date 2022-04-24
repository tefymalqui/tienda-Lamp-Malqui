import React from "react";
import './inicio.css';

const Inicio = () => {
    return (
        <div>
            <div className="contenedor mb-2">
                <p>Bienvenidos a Lamp</p>
            </div>
            <div className="d-flex flex-row justify-content-center estilo">
                <img src="/images/tazas.jpg" width='200'/>
                <img src="/images/velas.jpg"  width='200'/>
                <img src="/images/mirror.jpg"  width='200'/>
                <img src="/images/lamp.jpg"  width='200'/>
            </div>
        </div>
    )
}
export default Inicio
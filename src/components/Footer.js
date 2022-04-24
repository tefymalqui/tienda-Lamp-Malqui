import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import { BsFacebook } from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <footer className="text-white py-4 bg-dark mt-2">
                <div className="container">
                    <nav className="row">
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                            <img src={logo} className='mx-2' width='80' />
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className="text-center text-white">En nuestra tienda online podes encontrar decoraciones para tu hogar</li>
                        </ul>
                        <ul className='col-3 list-unstyled text-center'>
                            <li className="mb-2">Tienda</li>
                            <li>
                                <Link to='/' className="text-reset">Inicio</Link>
                            </li>
                            <li>
                                <Link to='/productos' className="text-reset">Productos</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className="mb-2">Nuestras redes sociales</li>
                            <li className="d-flex justify-content-around">
                                <BsFacebook />
                                <BsInstagram />
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer 
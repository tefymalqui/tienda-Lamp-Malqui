import React from 'react'
import logo from '../img/logo.png' //dos puntos porque vas una carpeta hacia atras
import { CartWidget } from './CartWidget'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="Logo">
          <Link to='/'>
          <img src={logo} width='75' height='75' className="rounded " />
          </Link>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-light " aria-current="page" to='/'>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Productos">Productos</Link>
            </li>
          </ul>
          
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import logo from '../img/logo.png' //dos puntos porque vas una carpeta hacia atras

 const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid ">
    <a className="navbar-brand mr-3 " href="Logo">
      <img src={logo} width='75' height='75' className="rounded "/>   
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar

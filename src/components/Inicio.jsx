import React from "react";

const Inicio = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100"  alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100"  alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
  )
}
export default Inicio
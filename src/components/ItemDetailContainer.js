import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail.js'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        fetch('https://623607d3eb166c26eb2e7041.mockapi.io/productos')
        .then((response) => response.json())
        .then((response) =>{
            // console.log(response) 
             setDetail( response.find((productos) => productos.id === id))
        })
    }, [])
    
    //console.log("estoy", detail)

    return (
        <div className='container'>
             <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer
import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    
    useEffect(() => {
        fetch('https://623607d3eb166c26eb2e7041.mockapi.io/productos')
        .then((response) => response.json())
        .then((response) =>{
            /* console.log(response) */
             setDetail( response.find((productos) => productos.id === '1'))
        })
    }, [])

    /*console.log("estoy", detail)*/

    return (
          <ItemDetail detail={detail}/>
    )
}

export default ItemDetailContainer
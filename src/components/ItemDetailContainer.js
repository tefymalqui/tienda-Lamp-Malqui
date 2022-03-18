import React, { useEffect, useState } from "react";
import ItemDetail from 'ItemDetail.js'

const ItemDetailContainer = () => {
    const [DetailContainer, setDetailContainer] = useState([])

    useEffect(() => {
       fetch("assets/productos.json")
       .then(response => response.json())
       .then(datos =>{
           setDetailContainer(datos)
       })
    }, [])

    return DetailContainer(
    )
}

export default ItemDetailContainer 
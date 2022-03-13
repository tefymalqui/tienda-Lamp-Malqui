import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
    const [listProducts, setListProducts] = useState([])
    const productos = [
        { id: '1', name: 'lampara', img: '../img/lampara.jpg', },
        { id: '2', name: 'silla', img: '', },
        { id: '3', name: 'jarron', img: '', },
        { id: '4', name: '', img: '', },
        { id: '5', name: '', img: '', },
    ]

    const getProducts = new Promise ((resolve, reject) =>{
        let condition = true
        if(condition){
            setTimeout(() =>{
                resolve(productos)
            }, 3000)
        }else {
            reject('Error')
        }
    })
      
     useEffect(() =>{
         getProducts
         .then((respuesta) => setListProducts(respuesta) )
         .catch((error) => console.log(error))
    },[])
    
    console.log(listProducts)

    return (
        <div>
            <h2>Lista de productos</h2>
            {listProducts.map((productos) => <Item productos={productos} key={productos.id}/>)}
        </div>
    )
}

export default ItemList
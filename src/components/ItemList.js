import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = () => {
    const [listProducts, setListProducts] = useState([])
    const productos = [
        { id: '1', name: 'Lampara', img: './imagen/lampara.jpg', },
        { id: '2', name: 'Silla', img: './imagen/silla.jpg', },
        { id: '3', name: 'Jarron', img: './imagen/jarron.jpg', },
        { id: '4', name: '', img: './imagen/lampara.jpg', },
        { id: '5', name: '', img: './imagen/lampara.jpg', },
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
           <div className='d-flex justify-content-between flex-wrap'>
                {listProducts.map((productos) => <Item productos={productos} key={productos.id}/>)}
           </div>
        </div>
    )
}

export default ItemList
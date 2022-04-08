import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()
    /* console.log(categoryId) */

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'items')
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId))
            : productosRef


        getDocs(q)
            .then((resp) => {
                setListProducts(resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

   return (
       <div className='container'>
           <h2>
              Bienvenidos a {props.inicio}
           </h2>
          
           <h3>Productos</h3>
            <Link className=" text-black" to="/Productos/lampara">Lampara</Link>
            <br></br>
            <Link className=" text-black" to="/Productos/aromatizantes">Aromatizantes</Link>
            <div className='d-flex justify-content-between flex-wrap'>
                {loading
                    ? <p>Cargando..</p>
                    : <ItemList listProducts={listProducts}/>}
            </div>
       </div>
   )
} 

export default ItemListContainer;

import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import Item from './Item';

const ItemList = () => {
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()
    /* console.log(categoryId) */
    const productos = [
      /*  { id: '1', name: 'Lampara', img: './imagen/lampara.jpg', },
        { id: '2', name: 'Silla', img: './imagen/silla.jpg', },
        { id: '3', name: 'Jarron', img: './imagen/jarron.jpg', },
        { id: '4', name: '', img: './imagen/lampara.jpg', },
        { id: '5', name: '', img: './imagen/lampara.jpg', },
    */]

    const getProducts = new Promise((resolve, reject) => {
        let condition = true
        if (condition) {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        } else {
            reject('Error')
        }
    })
    //revisar category 
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
        <div>
            <h3>Productos</h3>
            <Link className=" text-black" to="/Productos/lampara">Lampara</Link>
            <br></br>
            <Link className=" text-black" to="/Productos/aromatizantes">Aromatizantes</Link>
            <div className='d-flex justify-content-between flex-wrap'>
                {loading
                    ? <p>Cargando..</p>
                    : listProducts.map((productos) => <Item productos={productos} key={productos.id} />)}
            </div>
        </div>
    )
}

export default ItemList
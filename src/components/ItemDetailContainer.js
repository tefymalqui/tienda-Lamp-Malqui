import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail.js'
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/config.js";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [detail, setDetail] = useState([])
    const {id} = useParams();
    
    useEffect(() => {
        const docRef = doc(db, "items", id)
        
        getDoc(docRef)
        .then((doc)=> {
            setDetail({id: doc.id, ...doc.data()})
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])
    
    //console.log("estoy", detail)

    return (
        <div className='container'>
            {
                loading
                ? <h2>Cargando...</h2>
                :   <ItemDetail {...detail}/>
            }
        </div>
    )
}

export default ItemDetailContainer
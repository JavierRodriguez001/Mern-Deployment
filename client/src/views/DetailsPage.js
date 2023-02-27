import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'



const DetailsPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [store,setStore]= useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/stores/${id}`)
        .then(res=>setStore(res.data))
        .catch(err=>console.log(err))
    },[])



    return (
    <div>
        <div style={{display:'flex', justifyContent:"flex-end"}}>
        <Link to={'/'}>go back home</Link>
        </div>


        <div>

            <h2>{store.store}</h2>
            <h2>Store Number: {store.storeNumber}</h2>
            <h2>{store.isOpen? "Open":"Close"}</h2>
    
            <button style={{marginTop:'100px'}}>
                <Link to={`/store/edit/${id}`}>Edit Store Details</Link>
            </button>
        </div>
    </div>
    )
}

export default DetailsPage
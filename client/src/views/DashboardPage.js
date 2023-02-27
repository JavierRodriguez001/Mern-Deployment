import React from 'react'
import axios from'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => {
    const [storeList,setStoreList] = useState([])


// SORT LIST IN ALHABETICAL ORDER
    const sortedList = storeList.sort((a, b)=>{
        if (a.storeNumber < b.storeNumber) {
            return -1;
        }
        if (a.storeNumber > b.storeNumber) {
            return 1;
        }
        return 0;
    })

// API CALL
    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores`)
        .then(res=>setStoreList(res.data))
        .then(err=>console.log(err))
    },[])

    const handleDelete = (deleteId) =>{
        axios.delete(`http://localhost:8000/api/stores/${deleteId}`)
        .then(res=>{
            const filteredList =storeList.filter((eachStore)=>eachStore._id !== deleteId)
            setStoreList(filteredList)
        })
        .catch(err=>console.log(err))
    }

//CAPITALIZE FIRST LETTER IN EVERY WORD ENTERED
        function cap(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    


    return (
    <div>

        <p style={{color:"purple"}}>Find stores in your local area!</p>

{/* DASHBOARD TABLE */}
        <table className='table table-striped' style={{border:"2px solid black"}}>
{/* THEAD */}
            <thead className='thead-dark' style={{backgroundColor:"gray", color:"white"}}>
                <tr>
                    <th>Store</th>
                    <th>Store Number</th>
                    <th>Open</th>
                    <th>Remove</th>
                </tr>
            </thead>
{/* TBODY */}
            <tbody>
                {
                    sortedList.map((eachStore, idx)=>(
                        <tr key={idx}>
                        <td style={{color:"purple"}}>
                            <Link to={`/store/${eachStore._id}`}>{cap(`${eachStore.store}`)}</Link>
                        </td>
                        <td>
                            {eachStore.storeNumber}
                        </td>
                        <td>{eachStore.isOpen ? "True":"False"}</td>
                        <td>
                            {
                            eachStore.isOpen?
                            <button className='btn' style={{backgroundColor:'red',color:'white'}} onClick={()=>handleDelete(eachStore._id)}>Delete</button>:
                            <p></p>
                            }
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        {/* LINK TO ADD NEW Store */}
                <button><Link to="/store/add">Cant find your Store?</Link></button>

    </div>
    )
}

export default DashboardPage
import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const AddStorePage = () => {
    const [store,setStore]=useState("")
    const [storeNumber,setStoreNumber]=useState()
    const [isOpen,setIsOpen]=useState(false)
    const navigate = useNavigate()
    const [errList,setErrList] =useState([])


    const submitHandle = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:8000/api/stores',{store, storeNumber, isOpen})
      .then(res=>{
        const newStore = res.data
        navigate(`/store/${newStore._id}`)
      }
    )
      .catch(err=>{
        const errorResponseData = err.response.data.errors
        const tempErrorArr = []
        for (const key in errorResponseData){
          tempErrorArr.push(errorResponseData[key].message)
        }
        setErrList(tempErrorArr)       
      })
    }

    return (
      <div>
        <div style={{display:'flex', justifyContent:"flex-end"}}>
        <Link to={'/'}>go back home</Link>
        </div>
  
        <p style={{color:"purple"}}>Add a new Store!</p>
  
        <form className='form' onSubmit={submitHandle} style={{border:"2px solid lightGray", padding: "20px"}}>
          <label>Store Name:</label>
          <div>
            <input type='text'
              name='store' value={store} 
              onChange={e=>setStore(e.target.value)} 
              className="form-control" style={{marginBottom:"15px"}}/>
          </div>
  
          <label>Store Number:</label>
          <div>
            <input type='text'
              name='name' value={storeNumber} 
              onChange={e=>setStoreNumber(e.target.value)} 
              className="form-control" style={{marginBottom:"15px"}}/>
          </div>
          <div>
            <input type="checkbox" value={true}
              onChange={e=>setIsOpen(e.target.value)}
              name="isOpen" id="isOpen"/>
            <label for="IsOpen">  Open?</label>
          </div>
            {
              errList.map((eachErr,idx)=>(
                <p style={{color: "red"}} key={idx}>{eachErr}</p>
              ))
            }
  
          <div>

            <button type="submit"
              className='btn btn-primary' 
              style={{marginTop:"20px"}}>Add a new Store</button>
          </div>
        </form>
  
      </div>
    )
  }
  
  export default AddStorePage
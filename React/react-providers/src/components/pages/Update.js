import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../../Storeddata/Storeddata'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {
   const id = useParams()
   const [product,setproduct] = useState()
   const navigate = useNavigate()
   useEffect(()=>{
    axios.get(`http://localhost:3000/Products/${id.id}`) 
    .then(res=>setproduct(res.data))
   },[])

   function Update(){

     fetch(`http://localhost:3000/Products/${id.id}`,{
       method : "PUT",
       headers :{
         'Content-type': 'application/json; charset=UTF-8',
       },
       body : JSON.stringify(product)
     })
     navigate('/Productstor/')
  }

  return (
    <div>
       {product && 
       <form onSubmit={e=>e.preventDefault()}>
       <div>
        <label>Name</label>
        <input type="text" value={product.Name} onChange={e=>setproduct({...product,Name:e.target.value})} />
       </div>
       <div>
        <label>Brand</label>
        <input type="text" value={product.Brand} onChange={e=>setproduct({...product,Brand:e.target.value})} />
       </div>
       <div>
        <label>Category</label>
        <select value={product.Category} onChange={e=>setproduct({...product,Category:e.target.value})}>
          <option value="Pc">Pc</option>
          <option value="Phone">Phone</option>
          <option value="Other">Other</option>
        </select>
       </div>
       <div>
        <label>Price</label>
        <input type="Number"   value={product.Price} onChange={e=>setproduct({...product,Price:e.target.value})}/>
       </div>
       <div>
        <label>Image</label>
        <input type="file"    onChange={e=>setproduct({...product,img:e.target.value})}/>
       </div> 
       <div>
        <button onClick={Update}>Update</button>
       </div>
    </form>
       }
       
    </div>
  )
}

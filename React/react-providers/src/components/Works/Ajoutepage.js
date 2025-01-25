import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../../Storeddata/Storeddata'


export default function Ajoutepage() {
  const [product,setproduct] = useState({
    Name:'',
    Brand:'',
    Category:'',
    Price:'',
    img:''
  })
 
  let disbled = product.Name===""||product.Brand===""||product.Category===""||product.Price===""
   function Addproduct(){
    fetch("http://localhost:3000/Products",{
      method:"POST",
      headers:{ 'Content-type': 'application/json; charset=UTF-8' },
      body:JSON.stringify(product)
    })
    setproduct({...product,Name:'',Brand:'',Category:'',img:'',Price:''})

   }
   
 
 
  
  return (
    <div>
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
            <input type="file" name='image'  value={product.img} onChange={e=>setproduct({...product,img:e.target.value})}/>
           </div>
           <div>
            <button onClick={Addproduct} disabled={disbled}>Add</button>
           </div>
           
        </form>
    </div>
  )
}

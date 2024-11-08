import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Singlproduct from './Singlproduct'
import { Cartdata } from '../../StoredData/StoedData'

export default function Product() {
const {id,category} = useParams()
const [productID,setproduct] = useState({})
const [ProductsCatrgory ,setPcat] = useState([])
const cart = useContext(Cartdata)
useEffect(()=>{
  fetch(`https://fakestoreapi.in/api/products/${id}`) 
.then(res => res.json())
.then(res => setproduct(res.product))
},[])

useEffect(()=>{
  fetch(`https://fakestoreapi.in/api/products/category?type=${category}`)
      .then(res => res.json())
      .then(res => setPcat(res.products))
})

  return (
    < >
      <div className='container ' style={{marginLeft:"400px"}}>
        <div className="card" style={{width: "45rem"}}>
      <div className="card-body">
      <img className="card-img-top" style={{width: "400px",height:"400px"}} src={productID.image} alt="Card image cap"/>

        <h5 className="card-title">{productID.title}</h5>
        <p className="card-text">{productID.description}</p>
        <p className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-3 shadow-sm" 
        style={{fontSize: '18px', width: '120px', textAlign: 'center'}}>{productID.price} $</p>
      </div>
      <button  className="btn btn-success" onClick={()=>cart.AddTcart(productID)}>Add product</button>
    </div>
    </div>
    <div className='row'>
    {ProductsCatrgory.map(prd=>{
     return  <Singlproduct Product={prd} key={prd.id} path={`/ProductsP/${prd.id}/${prd.category}`}/>
    })}
    </div>
    
    </>
  )
}

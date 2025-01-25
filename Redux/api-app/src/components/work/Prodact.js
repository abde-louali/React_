import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Addlist, AddTcart } from '../../redux/action'

function Prodact() {
    const id = useParams()
  
    const dispatch = useDispatch()
    useEffect(()=>{
        async function add() {
            const reponse = await fetch(`https://fakestoreapi.in/api/products/${id.id}`)
            const result = await reponse.json()
            dispatch(Addlist(result.product))
        }
       
        add()
    },[])
    const Product = useSelector(state=>state.singleproduct)
    // console.log(Product);
  return (
    <div>
 <div className='container ' style={{marginLeft:"400px"}}>
        <div className="card" style={{width: "45rem"}}>
      <div className="card-body">
      <img className="card-img-top" style={{width: "400px",height:"400px"}} src={Product.image} alt="Card image cap"/>

        <h5 className="card-title">{Product.title}</h5>
        <p className="card-text">{Product.description}</p>
        <p className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-3 shadow-sm" 
        style={{fontSize: '18px', width: '120px', textAlign: 'center'}}>{Product.price} $</p>
      </div>
      <button  className="btn btn-success" onClick={()=>dispatch(AddTcart(Product))}>Add product</button>
    </div>
    </div>
    </div>
  )
}

export default Prodact
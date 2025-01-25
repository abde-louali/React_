import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddTcart } from '../../redux/action'

export default function SingleProdact({Product}) {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
        <div className='col-2 my-2 ms-4 mx-3 '>
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <img className="card-img-top" style={{width: "80px",height:"80px"}} src={Product.image} alt="Card image cap"/>

    <h5 className="card-title">{Product.title.slice(0,20)} ...</h5>
    <p className="card-text">{Product.description.slice(0,50)} ...</p>
    <p className='badge bg-warning '>{Product.price} $</p> <br />
    <button className="btn btn-info mx-2" onClick={()=>navigate(`/Product/${Product.id}/${Product.category}`)} >More details</button>
    <button onClick={()=>dispatch(AddTcart(Product))} className="btn btn-success">Add product</button>
  </div>
</div>
</div>
    </div>
  )
}

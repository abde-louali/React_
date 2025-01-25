import React, { useContext } from 'react'
import { Cartdata } from '../StoredData/StoedData'

export default function Cart() {
  const Cart = useContext(Cartdata)
  const total = Cart.cart.reduce((acc, product) => acc + product.price * (product.qte || 1), 0)
  return (
    <div className="container my-5">
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Add</th>
            <th>Discount</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Buy Product</th>
          </tr>
        </thead>
        <tbody>
          {Cart.cart.map((produit) => {
            return (
              <tr key={produit.id}>
                <td>
                  <img
                    src={produit.image}
                    alt={produit.title}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td>{produit.title.slice(0, 80)}...</td>
                <td>{produit.qte}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={()=>Cart.AddQuntity(produit)}>+</button>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={()=>Cart.MinisQuntity(produit)}>-</button>
                </td>
                <td>{produit.price  * produit.qte} $</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={()=>Cart.deleteP(produit)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-success btn-sm">Buy</button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tr>
          <td> 
            totalr :{total}
          </td>
        </tr>
      </table>
    </div>
  )
}

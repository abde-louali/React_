import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
  const id = useParams();
  const [Product, setproduct] = useState({
    category: '',
    name: '',
    price: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id.id}`)
      .then(res => res.json())
      .then(res => setproduct(res));
  });

  function UpdatePrd() {
    fetch(`http://localhost:3000/products/${id.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(Product)
    });
    navigate("/Table/");
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Update Product</h2>
      {Product && (
        <form onSubmit={e => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              value={Product.category}
              onChange={e => setproduct({ ...Product, category: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Name Product</label>
            <input
              type="text"
              className="form-control"
              value={Product.name}
              onChange={e => setproduct({ ...Product, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price Product</label>
            <input
              type="text"
              className="form-control"
              value={Product.price}
              onChange={e => setproduct({ ...Product, price: e.target.value })}
            />
          </div>
          <button className="btn btn-success" onClick={UpdatePrd}>Update Product</button>
        </form>
      )}
    </div>
  );
}

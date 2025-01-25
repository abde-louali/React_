import React from 'react';

export default function Ajoute({ Product, setproduct, OnAdd }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Product</h2>
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
        <button className="btn btn-primary" onClick={OnAdd}>Ajouter Product</button>
      </form>
    </div>
  );
}

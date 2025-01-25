import React from 'react';
import { Link } from 'react-router-dom';

export default function Table({ ProductList, Ondelete }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products Table</h2>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ProductList.map(prd => (
            <tr key={prd.id}>
              <td>{prd.category}</td>
              <td>{prd.name}</td>
              <td>{prd.price}</td>
              <td>
                <Link className="btn btn-warning btn-sm" to={`/Update/${prd.id}/`}>Edit</Link>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => Ondelete(prd.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

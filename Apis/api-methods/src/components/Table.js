import React from 'react';
import { Link } from 'react-router-dom';

export default function Table({ ondelet, List }) {
  return (
    <div className="container">
      <table className="table table-striped table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>CIN</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Details</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {List.map((user) => (
            <tr key={user.id}>
              <td>{user.cin}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><Link to={`/UserDetails/${user.id}`} className="btn btn-info btn-sm">View Details</Link></td>
              <td><button className="btn btn-danger btn-sm" onClick={() => ondelet(user.id)}>Delete</button></td>
              <td><Link to={`/Updateuser/${user.id}`} className="btn btn-warning btn-sm">Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

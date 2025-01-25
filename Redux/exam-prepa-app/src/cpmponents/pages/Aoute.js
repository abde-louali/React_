import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adduser } from '../../redux/actions';

function Aoute() {
  const [user, setUser] = useState({
    cin: '',
    name: '',
    email: '',
  });

  const dispatch = useDispatch();

  function Add() {
    dispatch(adduser(user));
    setUser({ cin: '', name: '', email: '' }); 
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Add New User</h1>
      <form onSubmit={(e) => e.preventDefault()} className="container-fluid">
        <div className="mb-3">
          <label className="form-label"><strong>CIN</strong></label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter CIN"
            value={user.cin}
            onChange={(e) => setUser({ ...user, cin: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label"><strong>Full Name</strong></label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label"><strong>Email</strong></label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button className="btn btn-success w-100" onClick={Add}>Add User</button>
      </form>
    </div>
  );
}

export default Aoute;

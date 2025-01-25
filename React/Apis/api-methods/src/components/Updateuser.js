import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Updateuser() {
  const { id } = useParams();
  const [user, setuser] = useState();
  const navigate = useNavigate();
 
 
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => setuser(res.data));
  }, [id]);

  function updateuser() {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(user)
    });
    navigate('/Table/');
  }

  return (

    <div className="container mt-4">
      {user && (
        <form onSubmit={e => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label">CIN</label>
            <input
              type="text"
              className="form-control"
              value={user.cin}
              onChange={e => setuser({ ...user, cin: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={user.name}
              onChange={e => setuser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={user.email}
              onChange={e => setuser({ ...user, email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary" onClick={updateuser}>Update User</button>
        </form>
      )}
    </div>
  );
}

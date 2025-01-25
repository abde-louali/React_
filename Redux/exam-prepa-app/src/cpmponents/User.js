import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Deleteuser } from '../redux/actions';

function User({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="card p-3 mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p><strong>CIN:</strong> {user.cin}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <div className="d-flex gap-0">
          <button className="btn btn-warning me-2" onClick={() => navigate(`/Update/${user.cin}`)}>Edit</button>
          <button className="btn btn-danger" onClick={() => dispatch(Deleteuser(user.cin))}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default User;

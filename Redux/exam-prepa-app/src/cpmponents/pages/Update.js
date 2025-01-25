import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Updateuser } from '../../redux/actions';

function Update() {
  const users = useSelector((state) => state.list);
  const { cin } = useParams();
  const [user, setUser] = useState(users.find((u) => u.cin === cin));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    dispatch(Updateuser(user));
    navigate('/Table/');
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Update User</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label" >CIN</label>
          <input
            type="text"
            className="form-control"
            value={user.cin}
            onChange={(e) => setUser({ ...user, cin: e.target.value })}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button className="btn btn-success" onClick={handleUpdate}>
          Update User
        </button>
      </form>
    </div>
  );
}

export default Update;

import React from 'react';

export default function Form({ users, setuser, adduser }) {
    let isdesabled = users.name =='' || users.email ==''||users.cin =='';  
  return (
    <div className="container mt-4">
      <form action="" onSubmit={e => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">CIN</label>
          <input
            type="text"
            className="form-control"
            value={users.cin}
            onChange={e => setuser({ ...users, cin: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={users.name}
            onChange={e => setuser({ ...users, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={users.email}
            onChange={e => setuser({ ...users, email: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={adduser} disabled={isdesabled}>Add User</button>
      </form>
    </div>
  );
}

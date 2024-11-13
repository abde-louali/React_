import React from 'react';

export default function Signin({Obj, setobj, onAdd, ErrorMesage}) {
  return (
    <div className="container mt-5">
        <form onSubmit={e => e.preventDefault()} className="border p-4 rounded shadow-sm">
         <div className="mb-3">
             <label className="form-label">Username</label>
             <input type="text" className="form-control" value={Obj.username} onChange={e => setobj({...Obj, username: e.target.value})}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Password</label>
             <input type="password" className="form-control" value={Obj.password} onChange={e => setobj({...Obj, password: e.target.value})}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Email</label>
             <input type="email" className="form-control" value={Obj.email} onChange={e => setobj({...Obj, email: e.target.value})}/>
         </div>
         <button className="btn btn-primary w-100" onClick={onAdd}>Signin</button>
         <br />
         <p className="text-danger mt-3">{ErrorMesage}</p>
        </form>
    </div>
  );
}

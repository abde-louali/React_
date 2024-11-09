import React from 'react';

export default function Login({ObjLogin, setlog, Onlog, ErrorMesage}) {
  return (
    <div className="container mt-5">
        <form onSubmit={e => e.preventDefault()} className="border p-4 rounded shadow-sm">
         <div className="mb-3">
             <label className="form-label">Username</label>
             <input type="text" className="form-control" value={ObjLogin.username} onChange={e => setlog({...ObjLogin, username: e.target.value})}/>
         </div>
         <div className="mb-3">
             <label className="form-label">Password</label>
             <input type="password" className="form-control" value={ObjLogin.password} onChange={e => setlog({...ObjLogin, password: e.target.value})}/>
         </div>
         <button className="btn btn-primary w-100" onClick={Onlog}>Login</button>
         <br />
         <p className="mt-3">I don't have an account? <a href="/Signin/">Signin</a></p>
         <p className="text-danger mt-3">{ErrorMesage}</p>
        </form>
    </div>
  );
}

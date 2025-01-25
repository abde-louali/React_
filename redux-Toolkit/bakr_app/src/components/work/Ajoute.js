import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adduser } from '../../redux/reducer';



export default function Ajoute() {
    const [ddUser,setdduser] = useState({
        cin:'',
        name:'',
        email:'',

    })
    const dispatch = useDispatch()
    function Add(){
        dispatch(adduser(ddUser))
        setdduser({...ddUser,cin:'',name:'',email:''})
    }
  return (
    <div className="container mt-4">

      <form onSubmit={e => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Cin</label>
          <input
            type="text"
            className="form-control"
            value={ddUser.cin}
            onChange={e => setdduser({ ...ddUser, cin: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={ddUser.name}
            onChange={e => setdduser({ ...ddUser, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={ddUser.email}
            onChange={e =>setdduser({ ...ddUser, email: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={Add}>Ajouter Product</button>
      </form>
    </div>
  );
}

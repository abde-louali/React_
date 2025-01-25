import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../../redux/reducer'



export default function Update({id}) {

    const data = useSelector(state=>state.users.listusers)
    const [user,setuser] = useState(data.find(user=>user.cin === id.cin))
    const Navigate = useNavigate()
    const dispatch = useDispatch()
     function UpdateU(){
        dispatch(updateuser(user))
        Navigate('/Allusers/')
     }
   
  return (
    <div>
          <form onSubmit={e => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Cin</label>
          <input
            type="text"
            className="form-control"
            value={user.cin}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
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
            type="text"
            className="form-control"
            value={user.email}
            onChange={e =>setuser({ ...user, email: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={UpdateU}>Update User</button>
      </form>
    </div>
  )
}

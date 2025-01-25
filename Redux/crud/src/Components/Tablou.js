import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletuser, edituser } from '../redux/Types'

export default function Tablou() {
    const listusers = useSelector(state=>state.usersList)
    const dispatch = useDispatch()
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {
                listusers.map((user)=>{
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td><button onClick={()=>dispatch(deletuser(user.id))}>Delete</button></td>
                        <td><button onClick={()=>dispatch(edituser(user.id))}>Edit</button></td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

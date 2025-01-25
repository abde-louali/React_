import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edited, getusers } from '../redux/reducer'

function Getusers({edituser}) {
    const dispatch = useDispatch()
     useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>dispatch(getusers(res.data)))
     })
      const usersdata = useSelector((state)=>state.dataus)
    
      
      function deletuser(id){
        axios.delete(`http://localhost:3000/users/${id}`)
      }


  return (
    <div>
       <table>
        <thead>
         <tr>
         <th>Cin</th>
            <th>Name</th>
            <th>Age</th>
         </tr>
        </thead>
        <tbody>
            {
                usersdata.map((user)=>{
                    return <tr key={user.id}>
                        <td>{user.cin}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td><button onClick={()=>deletuser(user.id)} >Delete</button></td>
                        <td><button onClick={()=>dispatch(edited(user.id))} >edit</button></td>
                    </tr>
                })
            }
        </tbody>
       </table>
    </div>
  )
}

export default Getusers
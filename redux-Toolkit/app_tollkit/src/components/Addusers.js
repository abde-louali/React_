import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateuser } from '../redux/reducer'

function Addusers() {
    const dispatch = useDispatch()
    const [user,setuser] = useState({
        cin:'',
        name:'',
        age:''
    })
    function add(){
        axios.post("http://localhost:3000/users",user)
    }
    const id =useSelector(state=>state.id)
    const users = useSelector(state=>state.dataus)
    const luser = users.find(usr=>usr.id==id)
    const isedited = useSelector(state=>state.isedited)
   
    // console.log(id);
    
    // useEffect(()=>{
    
    //         setuser({...user,cin:luser.cin,name:luser.name,age:luser.age})
        
    // },[isedited,luser])

    function update(){
        axios.put(`http://localhost:3000/users/${luser.id}`,user)
        // dispatch(updateuser(user))
    }
  return (
    <div>
        <form onSubmit={e=>e.preventDefault()}>
            <div>
                <label htmlFor="">cin</label>
                <input type="text" value={user.cin} onChange={e=>setuser({...user,cin:e.target.value})} />
            </div>
            <div>
                <label htmlFor="">name</label>
                <input type="text" value={user.name} onChange={e=>setuser({...user,name:e.target.value})} />
            </div>
            <div>
                <label htmlFor="">age</label>
                <input type="text" value={user.age} onChange={e=>setuser({...user,age:e.target.value})} />
            </div>
            <div>
                {
                    !isedited ? <button onClick={()=>add(user)}>Add user</button> 
                    :
                    <button onClick={update}>Update user</button> 
                }
            </div>
        </form>
    </div>
  )
}

export default Addusers
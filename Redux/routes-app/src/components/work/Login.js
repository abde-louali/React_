import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({Loogin}) {
    const [user,setuser] = useState({
        name:'',
        pass:''
      })
      const [log,setlog] = useState([])
      const navigate = useNavigate()
       function Loging(){
         fetch("http://localhost:3000/user")
         .then(res=>res.json())
         .then(res=>setlog(res))
         const userr = log.find(use=>use.name ==user.name && use.pass == user.pass )
           if(userr){
              Loogin()
              navigate("/Navbar/")
           }else{
            navigate("/Login/")
           }
       }
  return (
    <div>
        <form onSubmit={e=>e.preventDefault()}>
            <div>
                <label>Username</label>
                <input type="text"  value={user.name} onChange={e=>setuser({...user,name:e.target.value})}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text"  value={user.pass} onChange={e=>setuser({...user,pass:e.target.value})}/>
            </div>
            <div>
                <button onClick={Loging}>Log in</button>
            </div>
        </form>
    </div>
  )
}

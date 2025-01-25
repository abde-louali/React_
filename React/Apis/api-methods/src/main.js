import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import axios from 'axios'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Updateuser from './components/Updateuser'
let index = 1
export default function Main() {
    const [user,setuser] = useState({
        cin:'',
        name:'',
        email:''

    })
  
    const [userslist,setuserslist] = useState([])
    axios.get("http://localhost:3000/users")
    .then(res=>setuserslist(res.data))


     function Adduser(){
    
        fetch("http://localhost:3000/users",{
            method :"POST",
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(user)
        })
        setuser({...user,name:'',email:'',cin:''})
    }

     function Deleteuser(id){
      axios.delete(`http://localhost:3000/users/${id}`)
    }  

  return (
    <div>
     
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/form/' element={ <Form users={user} setuser={setuser} adduser={Adduser}/>} />
            <Route path='/Table/' element={ <Table List={userslist}  ondelet={Deleteuser} />} />
            <Route path='/UserDetails/:id' element={ <UserDetails />} />
            <Route path='/Updateuser/:id' element={ <Updateuser />} />
        </Routes>
        </BrowserRouter>
  
   
    </div>
  )
}

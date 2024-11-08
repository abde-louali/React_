import React, { useState } from 'react'
import Add from './Add'
import Userslist from './Userslist'
let index = 1
export default function Main2() {
    const [ValueAdd,setvalue] = useState('') 
    const [listusers,setuserslist] = useState([]) 
    const [objects,setobjects] = useState({
        id:'',
        name:''
    })
    const [isupdate,setisupdate] = useState(false)
    //this function for add a user

    function adduser(){
        setuserslist([...listusers,{...objects,id:index ,name:ValueAdd}])
        index++
       setvalue('')
    }
    // this function for delete a user 

    function ondelit(id){
      const newlist = listusers.filter(stg=>stg.id!==id)
     setuserslist(newlist)
    }

    // this function for takeing use name to edit it

    function editeuser(id){
      // this is way for take the user name
      // let user = listusers.find(user=>user.id == id)
      // setvalue(user.name)
      // setisupdate(true)
      
      // this is another way 
      listusers.map((stg)=>{
        if(stg.id == id ){
          setvalue(stg.name)
          setisupdate(true)
          setobjects({...objects,id:stg.id,name:stg.name})
        }
      })
    }
    // updating users names
    
    function update(){
      let newlist = listusers.map((stg)=>{
        if(stg.id == objects.id){
          
        return {...objects,id:stg.id,name:ValueAdd}
      }return stg
      })
       setuserslist(newlist)
       setisupdate(false)
       setvalue('')
    }
  return (
    <div>
        <Add vall={ValueAdd} set={setvalue} onAdd={adduser} isupdated={isupdate} onupdate={update}/>
      <div style={{ marginTop:"50px"}}>  <Userslist list={listusers} ondelete={ondelit} onedit={editeuser} /></div>
    </div>
  )
}

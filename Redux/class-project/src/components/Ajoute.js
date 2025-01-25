
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addstg, updatestg } from '../redux/actions'



function Ajoute() {
    const dispatch = useDispatch()
    const [user,setuser] = useState({
        num:'',
        name:'',
        filier:'',
       
    })
    const isedited = useSelector(state=>state.isedite)
    const stg = useSelector(state=>state.stg)
    // console.log(isedited);
    
   function Add(){
     dispatch(addstg(user))
     setuser({...user,num:'',name:'', filier:'',})
   }
   function update(){
    dispatch(updatestg(user))
    setuser({...user,num:'',name:'', filier:'',})
   }
   
   useEffect(()=>{
    if(stg&&isedited){
        setuser({...user,num:stg.num,name:stg.name,filier:stg.filier})
    }
   },[isedited,stg])
   

  return (
 
            <div className="container mt-4">
      <form action="" onSubmit={e => e.preventDefault()}>
        <div className="mb-3">
          <label className="form-label">Number</label>
          <input
            type="number"
            className="form-control"
            value={user.num}
            onChange={e => setuser({ ...user, num: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            onChange={e => setuser({ ...user, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Filier</label>
          <input
            type="text"
            className="form-control"
            value={user.filier}
            onChange={e => setuser({ ...user, filier: e.target.value })}
          />
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Note1</label>
          <input
            type="text"
            className="form-control"
        
            onChange={
               e=> setuser({ ...user,notes:[...user.notes,e.target.value]}) }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Note2</label>
          <input
            type="text"
            className="form-control"
        
            onChange={  e=> setuser({ ...user,notes:[...user.notes,e.target.value]}) }
          />
        </div> */}
        {
            !isedited ?
            <button className="btn btn-primary" onClick={Add}>Add User</button> 
            :
            <button className="btn btn-primary" onClick={ update} >Update User</button> 
        }
      </form>
    </div>
  )
}

export default Ajoute
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Adduser, Updateuser } from '../redux/Types'

export default function Ajoute() {
    const [userobj,setuserobj] = useState({
        id:'',
        name:'',
        age:''
    })

    const dispatch = useDispatch()
    const isedited = useSelector(state=>state.isedited)
    const newobj = useSelector(state=>state.user)
    function Add(){
      dispatch(Adduser(userobj))
      setuserobj({id:'',name:'',age:''})
    }
    function Updateduser(){
      dispatch(Updateuser(userobj))
      setuserobj({id:'',name:'',age:''})
      
    }
    useEffect(() => {
      if (isedited) {
        setuserobj({
          id: newobj.id ,
          name: newobj.name ,
          age: newobj.age ,
        });
      }
    }, [isedited,newobj]);

  return (
    <div>
        <form onSubmit={e=>e.preventDefault()}>
          <div>
          <label>id</label>
          <input type="text" value={userobj.id} onChange={e=>setuserobj({...userobj,id:e.target.value})} />
          </div>
          <div>
          <label>name</label>
          <input type="text" value={userobj.name} onChange={e=>setuserobj({...userobj,name:e.target.value})} />
          </div>
          <div>
          <label>age</label>
          <input type="number" value={userobj.age} onChange={e=>setuserobj({...userobj,age:e.target.value})} />
          </div>
          <div>
           { 
             isedited ==false ?
             <button onClick={Add} >Ajoute</button> :
            <div>
               <button onClick={Updateduser} >Update</button>
            </div>
           }
          </div>
        </form>
    </div>
  )
}

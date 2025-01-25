import React from 'react'

export default function Update({UpdatedStagire,setUpdatedStagaire,OnUpdate}) {
    let disable = UpdatedStagire.id==''||UpdatedStagire.name==""||UpdatedStagire.email==""||UpdatedStagire.age=="";
  return (
    <div>
         <form onSubmit={e=>e.preventDefault()}>
          <div>
          <label>Id</label>
          <input type="text" value={UpdatedStagire.id} onChange={e=>setUpdatedStagaire({...UpdatedStagire,id:e.target.value})}/>
          </div>
          <div>
          <label>Name</label>
          <input type="text" value={UpdatedStagire.name} onChange={e=>setUpdatedStagaire({...UpdatedStagire,name:e.target.value})}/>
          </div>
          <div>
          <label>Email</label>
          <input type="email" value={UpdatedStagire.email} onChange={e=>setUpdatedStagaire({...UpdatedStagire,email:e.target.value})}/>
          </div>
          <div>
          <label>Age</label>
          <input type="Number" value={UpdatedStagire.age} onChange={e=>setUpdatedStagaire({...UpdatedStagire,age:e.target.value})}/>
          </div>
          <button onClick={OnUpdate} disabled={disable}>Update</button>
        </form>
    </div>
  )
}

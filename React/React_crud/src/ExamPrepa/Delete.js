import React from 'react'

export default function Delete({stg,setstg,Ondelete}) {
     let disable = stg.id==''
  return (
    <div>
         <form onSubmit={e=>e.preventDefault()}>
          <div>
          <label>Id</label>
          <input type="text" value={stg.id} onChange={e=>setstg(e.target.value)}/>
          </div>
          <button onClick={Ondelete} disabled={disable}>Delete</button>
        </form>
    </div>
  )
}

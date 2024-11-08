import React from 'react'

export default function Add({vall,onAdd,set,isupdated,onupdate}) {
    let isdisable = vall=='';
  return ( 
    <div>
        <h1 style={{marginTop:'150px'}}>ALL USERS </h1>
        <div>
            <label htmlFor="">Type a username: </label>
            <input type="text" value={vall} onChange={e=>set(e.target.value)} />
        </div>
        {!isupdated  ? <button className='btn btn-success mt-3'  disabled={isdisable} onClick={onAdd}>Add</button> 
        :
        <button className='btn btn-info mt-3'   onClick={onupdate}>update</button> 
        }
    </div>
  )
}

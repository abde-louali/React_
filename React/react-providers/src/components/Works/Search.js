import React from 'react'

export default function Search({vall,setvall,Buton}) {
    
  return (
    <div>
        <input type="text" value={vall} onChange={e=>setvall(e.target.value)} />
        <button onClick={Buton} >Search</button>
    </div>
  )
}

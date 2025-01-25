import React from 'react'

export default function Search({vall,setvall,onsearch}) {
  return (
    <div>
        <input type="text" value={vall} onChange={e=>setvall(e.target.value)} placeholder='search by id '/>
        <button onClick={onsearch}>Search</button>
    </div>
  )
}

import React from 'react'

export default function Cities({city,setcity}) {
  return (
    <div>
        <select value={city} onChange={e=>setcity(e.target.value)}>
            <option value='Azrou'>Azrou</option>
            <option value="Ifrane">Ifrane</option>
            <option value="Rabat">Rabat</option>
            <option value="Tata">Tata</option>
        </select>
    </div>
  )
}

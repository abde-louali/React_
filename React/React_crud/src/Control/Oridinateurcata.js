import React from 'react'

export default function Oridinateurcata({setvall,vall,onserach}) {
  return (
    <div>
        <form onSubmit={e=>e.preventDefault()}>
            <input type="text" value={vall} onChange={e=>setvall(e.target.value)} />
            <button onClick={onserach}>search</button>
        </form>
    </div>
  )
}

import React from 'react'

export default function Ajoute({Stagire,setStagaire,Add}) {
  let disable = Stagire.id==''||Stagire.name==""||Stagire.email==""||Stagire.age=="";
  return (
    <div>
        <form onSubmit={e=>e.preventDefault()}>
          <div>
          <label>Id</label>
          <input type="text" value={Stagire.id} onChange={e=>setStagaire({...Stagire,id:e.target.value})}/>
          </div>
          <div>
          <label>Name</label>
          <input type="text" value={Stagire.name} onChange={e=>setStagaire({...Stagire,name:e.target.value})}/>
          </div>
          <div>
          <label>Email</label>
          <input type="email" value={Stagire.email} onChange={e=>setStagaire({...Stagire,email:e.target.value})}/>
          </div>
          <div>
          <label>Age</label>
          <input type="Number" value={Stagire.age} onChange={e=>setStagaire({...Stagire,age:e.target.value})}/>
          </div>
          <button onClick={Add} disabled={disable}>Ajouter</button>
        </form>
    </div>
  )
}

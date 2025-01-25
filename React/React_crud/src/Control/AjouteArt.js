import React from 'react'

export default function AjouteArt({Article,setStarticle,onadd}) {
  return (
    <div>
        
        <form onSubmit={e=>e.preventDefault()}>
          <div>
          <label>Id</label>
          <input type="text" value={Article.code} onChange={e=>setStarticle({...Article,code:e.target.value})}/>
          </div>
          <div>
          <label>Name</label>
          <input type="text" value={Article.nom} onChange={e=>setStarticle({...Article,nom:e.target.value})}/>
          </div>
          <div>
          <label>Email</label>
          <input type="text" value={Article.category} onChange={e=>setStarticle({...Article,category:e.target.value})}/>
          </div>
          <div>
          <label>Age</label>
          <input type="Number" value={Article.prix} onChange={e=>setStarticle({...Article,prix:e.target.value})}/>
          </div>
          <button onClick={onadd} >Ajouter</button>
        </form>
    </div>
  )
}

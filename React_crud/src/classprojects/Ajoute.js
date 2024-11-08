export function Ajoute({list,Onadd,isupdated,Update,set}){
  let disabled = list.LIbelle == '' || list.prix == '' ;
    return(
        <>
        <h2>Ajouter des produits</h2>
        <form action="" onSubmit={e=>e.preventDefault()} >
          <div className="form-group">
          <label>LIbelle produits</label>
          <input type="text" value={list.LIbelle} onChange={e=>set({...list,LIbelle:e.target.value })} className="form-control"/>
          </div>
          <div className="form-group">
          <label>Prix</label>
          <input type="number" value={list.prix} onChange={e=>set({...list,prix:e.target.value })} className="form-control"/>
          </div>
          <div className="form-group">
          <label>Promotion</label>
          <input type="checkbox" name="name"checked={list.promtion}onChange={e=>set({...list,promtion:e.target.checked })} className="form-check-input"/> 
          </div>
          <div>
           {!isupdated ?  <button disabled = {disabled} onClick={Onadd} className="btn btn-primary">
                Ajouter Article
            </button> 
            :
            <button disabled = {disabled} onClick={Update} className="btn btn-success">
             Modifer Produit 
        </button>
            }
          </div>
        </form>
        </>
        
    )
}
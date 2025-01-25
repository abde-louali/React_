export function Table({list,vall,isssearch,onedite,ondelete}){ 
    let filtredliist ;
    {vall && isssearch ? filtredliist = list.filter(stg=>stg.LIbelle == vall) : filtredliist = list}
    
    return(
        <>
        <h2>List des article </h2>
        <table className="table">
            <thead><tr><th scope="col">ID</th><th scope="col">Libele</th><th scope="col">prix</th><th scope="col">En Promotion </th>
            <th scope="col">Ajouter Panier</th><th>Editer produit</th><th>suprimer produit</th></tr></thead>
    
                { filtredliist.map((stg)=>{
                    
                    return <tbody key={stg.id}><tr><th scope="row">{stg.id} 
                           </th><td>{stg.LIbelle}</td><td>{stg.prix}</td>
                            <td>{stg.promtion ? 'Yes' : 'No'}</td>
                            <td><button className="btn btn-info">ajouter panier</button></td>
                            <td><button className="btn btn-primary" onClick={()=>onedite(stg.id) }>Edit</button></td>
                            <td><button className="btn btn-danger" onClick={()=>ondelete(stg.id) }>Delete</button></td>
                            
                            </tr></tbody>
                    })}
                
        </table>
        </>
    )
}
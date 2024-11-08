export function Serach({vallue,setsearch,onsearch,}){
    return(
        <>
        <h2>Recherche de produits</h2>
        <p>entre le libele pour rehercher: </p>
        <input type="text" value={vallue} onChange={e=>setsearch(e.target.value)} />
        <button className="btn btn-secondary" onClick={onsearch}>
            Search
        </button>
        </>
    )
}
import {useState} from "react";

export default function Modifier ({mod,verfProd}) {
    const [idP,setIdP] = useState('');
    const [libelP,setLibelP] = useState('');
    const [prixP,setPrixP] = useState('');
    const [promoP,setPromoP] = useState('');
    const handlreMod = (e) =>{
          e.preventDefault();
          const prod = verfProd(idP);
          if (prod) {
            setLibelP(prod.libelle);
            setPrixP(prod.prix);
            setPromoP(prod.promotion);
          }else{
            alert("Erreur : un produit avec cet ID n' existe pas.");
            setIdP('');
          }
    }
    const validerModification = () => {
      const modification = { id: Number(idP),libelle : libelP, prix: Number(prixP), Promotion: promoP};
      mod(modification);
      setIdP('');
      setLibelP('');
      setPrixP('');
      setPromoP(false);
  };
return(
    <form onSubmit={handlreMod} className="container p-4 bg-light">
    <h3>Modifier Produit</h3>
  
    <input type="number" className="form-control mb-3" placeholder="ID Produit" value={idP} onChange={(e) => setIdP(e.target.value)} />
    <input type="text" className="form-control mb-3" placeholder="Libellé" value={libelP} onChange={(e) => setLibelP(e.target.value)} />
    <input type="number" className="form-control mb-3" placeholder="Prix" value={prixP} onChange={(e) => setPrixP(e.target.value)} />
    
    <div className="form-check mb-3">
    <label className="form-check-label">Promotion</label>
      <input type="checkbox" className="form-check-input" checked={promoP} onChange={(e) => setPromoP(e.target.checked)} />
    </div>
  
    <button type="submit" className="btn btn-primary w-100">Modifier</button>
    <button type="button" className="btn btn-primary w-100" onClick={validerModification}>valider Modification</button>
  </form>
)
}


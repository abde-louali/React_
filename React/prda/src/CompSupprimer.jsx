import { useState} from 'react';
export default function Supprimer ({SetSupp}){
    const [ElmSup , setElmSup] = useState('');
    const handleSupp = (e)=>{
            e.preventDefault();
            const id = parseInt(ElmSup);
            SetSupp(id);
            setElmSup('');

    }
    return (
        <form onSubmit={handleSupp}className="container p-4 border rounded bg-light">
        <h3>Supprimer Produit</h3>
        <label className="form-label">Entrez Id  du produit :</label>
        <input
        type="number"
        value={ElmSup}
        className="form-control mb-3"
        placeholder="Libellé du produit"
        onChange={(e) => setElmSup(e.target.value)}
        />
        
        <button type="submit" className="btn btn-primary w-100">Supprimer</button>
    </form>
    )
}


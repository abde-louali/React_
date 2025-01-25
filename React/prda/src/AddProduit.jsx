import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AddProduit({ AddProd }) {
  const [id, setId] = useState('');
  const [libelle, setLibelle] = useState('');
  const [prix, setPrix] = useState('');
  const [promo, setPromo] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const newProd = { id: Number(id), libelle, prix: Number(prix), Promotion: promo };
    AddProd(newProd);
    setId('');
    setLibelle('');
    setPrix('');
    setPromo(false);
  };

  return (
    <form className="container p-4 border rounded bg-light">
    <h3>Ajouter Produit</h3>
    <input type="number" className="form-control my-2" placeholder="ID Produit" value={id} onChange={(e) => setId(e.target.value)} />
    <input type="text" className="form-control my-2" placeholder="Libellé Produit" value={libelle} onChange={(e) => setLibelle(e.target.value)} />
    <input type="number" className="form-control my-2" placeholder="Prix Produit" value={prix} onChange={(e) => setPrix(e.target.value)} />
    <div className="form-check my-2">
      <label className="form-check-label">Promotion</label>
      <input type="checkbox" className="form-check-input" checked={promo} onChange={(e) => setPromo(e.target.checked)} />
    </div>
    <button className="btn btn-primary w-100" onClick={handleClick}>Ajouter</button>
  </form>
  );
}


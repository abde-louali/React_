import React, { Component, useState } from 'react';

export default function RechercherProduit({ SetElement }) {
  const [elmRech, setElmRech] = useState('');

  const handleRech = (e) => {
    e.preventDefault();
    SetElement(elmRech);
  };

  return (
    <form onSubmit={handleRech} className="container p-4 border rounded bg-light">
      <h3>Recherche Produit</h3>
      <label className="form-label">Entrez le libellé du produit :</label>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Libellé du produit"
        value={elmRech}
        onChange={(e) => setElmRech(e.target.value)}
      />
      <button type="submit" className="btn btn-primary w-100">Rechercher</button>
    </form>
  );
}




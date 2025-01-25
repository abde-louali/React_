import React, { useState } from 'react';
import './App.css';
import AjouterProduit from './AddProduit';
import Header from './Header';
import Recherche from './RechercherProduit';
import List from './Produits';
import Supprimer from './CompSupprimer';
import Modifier from './CompModifier';
import { Route, Routes } from 'react-router-dom';
import Acceuil from './Acceuil';
import Produits from './Produits';
import ProduitsElectro from './ProduitsElectro';
import ProduitsAgro from './ProduitsAgro';
import AddProduit from './AddProduit';
import ProduitsFiltre from './ProduitsFiltre';
import RechercherProduit from './RechercherProduit';
import RechResList from './RechResList';

function App() {
  const products = [
    { id: 1, libelle: 'Produit 1', prix: 1000, Promotion: false },
    { id: 2, libelle: 'Produit 2', prix: 200, Promotion: true },
  ];

  const [listPrd, setListPrd] = useState(products);
  const [resRech, setResRech] = useState(listPrd);
  const [elementSearch, setElementSearch] = useState('');
  const [elementSupp, setElementSupp] = useState('');
  const AjoutPrd = (newPrd) => {
    const idExists = listPrd.some((product) => product.id === newPrd.id);
    if (idExists) {
      alert("Erreur : un produit avec cet ID existe déjà.");
      return;
    }
    const updatedList = [...listPrd, newPrd];
    setListPrd(updatedList);
    setResRech(updatedList);
  };

  const handleSearch = (searchTerm) => {
    setElementSearch(searchTerm);
    if (searchTerm) {
      setResRech(
        listPrd.filter((elm) =>
          elm.libelle.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setResRech(listPrd);
    }
  };
  const handleSup = (id) => {
    const idP = listPrd.find((prd) => prd.id == id)
    if (idP) {
      setElementSupp(id);
      const updatedList = listPrd.filter((prod) => (prod.id !== id))
      setListPrd(updatedList);
      setResRech(updatedList);
    } else {
      alert("Erreur : un produit avec cet ID n' existe pas.");
      return;
    }
  }
  const verifierProduit = (id) => {
    return listPrd.find((prod) => prod.id === Number(id));
  };
  const handleModify = (md) => {
    const idElm = listPrd.findIndex((prd) => prd.id == md.id);
    const updatedList = [...listPrd.slice(0, idElm), md, ...listPrd.slice(idElm + 1)];
    setListPrd(updatedList);
    setResRech(updatedList);
  }



  return (
    <div className="App">
      <Header T="Site e-Commerce" />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/AddProduit" element={<AddProduit AddProd={AjoutPrd} />} />
        {/* <Route path="/Produits" element={<Produits />} /> */}
        <Route path="/Produits" element={<Produits Lis={listPrd} />}>
          <Route path="electo" element={<ProduitsElectro />} />
          <Route path="agro" element={<ProduitsAgro />} />
        </Route>
        <Route path="/Produits/:id" element={<ProduitsFiltre tab={listPrd} />} />
        <Route path="/recherche" element={<RechercherProduit SetElement={handleSearch} />} />
        <Route path='/resRecherche' element={<RechResList Lis={resRech} />} />
      </Routes >


      {/* <AjouterProduit AddProd={AjoutPrd} />
      <Recherche SetElement={handleSearch} />
      <Supprimer SetSupp={handleSup} />
      <Modifier mod={handleModify} verfProd={verifierProduit} />
      <List Lis={resRech} /> */}
    </div>
  );
}

export default App;



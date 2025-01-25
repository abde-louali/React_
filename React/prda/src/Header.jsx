import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Header({ T }) {
  return (
    <header class="bg-primary text-white p-3 mb-4">
      <div class="container-fluid row align-items-center justify-content-evenly ">
        <div className='col-2 d-flex'>
          <img src={logo} alt="Logo du site" class="me-3" height='50px;' />
          <h6 class="m-0">{T}</h6>
        </div>

        <div className='col-10 bg-warning'>
          <ul className='d-flex justify-content-evenly'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/AddProduit">Ajouter Produit</Link></li>
            <li><Link to="/Produits">Liste Produits</Link></li>
            <li><Link to="/Produits/:id">Filtrer Produits</Link></li>
            <li><Link to="/recherche">Rechercher Produit</Link></li>
            <li><Link to="/resRecherche">Resultat Recherche</Link></li>

          </ul>
        </div>

      </div>
    </header>

  );
}



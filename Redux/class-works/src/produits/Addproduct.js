import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from './store/ProductReducerImmer';
import "bootstrap/dist/css/bootstrap.css";

function AddProduct() {
    const [id, setId] = useState('');
    const [nom, setNom] = useState('');

    const dispatch = useDispatch()

    const handleClick = (e) => {
      e.preventDefault();
      const newProduct = { id: Number(id), nom: nom };
      dispatch({ type: ADD_PRODUCT, payload: newProduct });
      setId('');
      setNom('');
    };
    return (
        <div>
            <form className="container p-4 border">
                <h3>Ajouter Produit</h3>
                <input type="text" className="form-control my-2" placeholder="id" value={id}
                    onChange={(e) => setId(e.target.value)} />

                <input type="text" className="form-control my-2" placeholder="Libellé Produit" value={nom}
                    onChange={(e) => setNom(e.target.value)} />

                <button className="btn btn-primary w-100"  onClick={handleClick}>Ajouter</button>
            </form>
        </div>
    )
}

export default AddProduct
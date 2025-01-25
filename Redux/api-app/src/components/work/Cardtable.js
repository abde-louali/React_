import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addquentity, allpaid, Deletproduct, Minquentity } from '../../redux/action';
import { useNavigate } from 'react-router-dom';

function Cardtable() {
  const cardProduct = useSelector((state) => state.cardList);
  const dispatch = useDispatch();
  const total = cardProduct.reduce((acc, product) => acc + product.price * (product.qte || 1), 0);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const islogin = useSelector((state) => state.logingin);

  function buy(id) {
    !islogin ? navigate('/Signin/') : navigate(`/Payment/${id}`);
  }

  function Buyall() {
    if (!islogin) {
      navigate('/Signin/');
    } else {
      dispatch(allpaid());
      navigate('/Payment/');
    }
  }

  return (
    <div className="container my-5">
      {islogin && <h1 className="text-center mb-4">{user.username}'s Card</h1>}
      <table className="table table-bordered table-hover shadow rounded">
        <thead className="table-dark">
          <tr className="text-center">
            <th>Product</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Add</th>
            <th>Discount</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Buy Product</th>
          </tr>
        </thead>
        <tbody>
          {cardProduct.map((produit) => (
            <tr key={produit.id} className="align-middle text-center">
              <td>
                <img
                  src={produit.image}
                  alt={produit.title}
                  className="img-fluid rounded"
                  style={{ width: '60px', height: '60px' }}
                />
              </td>
              <td>{produit.title.slice(0, 50)}...</td>
              <td>{produit.qte}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => dispatch(Addquentity(produit))}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => dispatch(Minquentity(produit))}>
                  -
                </button>
              </td>
              <td>{produit.price * produit.qte + '$'}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(Deletproduct(produit.id))}>
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => buy(produit.id)}
                >
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8" className="text-end">
              <h5 className="fw-bold">Total: {total + '$'}</h5>
              <button className="btn btn-success mt-2" onClick={Buyall}>
                Buy All
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cardtable;

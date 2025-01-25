import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../../Storeddata/Storeddata';
import { Link } from 'react-router-dom';
import Search from '../Works/Search';

export default function Productstor() {
  const data = useContext(Data);
  const [vall, setvall] = useState('');
  const [isclickd, setclickd] = useState(false);
  let filterdlist;

  function button() {
    setclickd(true);
  }

  useEffect(() => {
    if (isclickd) {
      setclickd(false);
    }
  }, [vall]);

  vall && isclickd
    ? (filterdlist = data.Productsdata.filter(
        (prd) => prd.Category === vall
      ))
    : (filterdlist = data.Productsdata);

  return (
    <div className="container mt-4">
      <Search setvall={setvall} vall={vall} Buton={button} />
      <div className="table-responsive mt-4">
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.Productsdata &&
              filterdlist.map((prd) => {
                return (
                  <tr key={prd.id}>
                    <td>{prd.Name}</td>
                    <td>{prd.Brand}</td>
                    <td>{prd.Category}</td>
                    <td>${prd.Price}</td>
                    <td>
                      <img
                        src={`http://localhost:3000/Products/img/${prd.img}`}
                        alt="product"
                        width="100"
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => data.Delete(prd.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/Update/${prd.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

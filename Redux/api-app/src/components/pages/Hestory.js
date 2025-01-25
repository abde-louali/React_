import React from 'react';
import { useSelector } from 'react-redux';

function Hestory() {
  const seledproducts = useSelector((state) => state.seledproducts);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 text-primary">Purchase History</h1>
      {
        seledproducts && seledproducts.length > 0 ? (
          <div className="row g-3">
            {seledproducts.map((prd) => (
              <div className="col-md-4" key={prd.id}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">
                      <i className="bi bi-box-seam"></i> {prd.title}
                    </h5>
                    <p className="card-text text-muted">
                      <strong>Brand:</strong> {prd.brand}
                    </p>
                    <p className="card-text text-muted">
                      <strong>Price:</strong> ${prd.price}
                    </p>
                    <p className="card-text text-muted">
                      <strong>Quantity:</strong> {prd.qte}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-secondary">There is no history</h2>
          </div>
        )
      }
    </div>
  );
}

export default Hestory;

import React from 'react';

function Profilepage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h1 className="card-title text-primary fw-bold mb-4">Welcome to Your Profile</h1>
              <p className="card-text text-muted">
                This is your personalized space. Here, you can view and manage your account details, preferences, and activity history.
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;

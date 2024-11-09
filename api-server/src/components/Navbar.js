import React from 'react';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="btn btn-primary" href="/Login/">Login</a>
                <a className="btn btn-secondary ms-3" href="/Signin/">Signin</a>
            </div>
        </nav>
    </div>
  );
}

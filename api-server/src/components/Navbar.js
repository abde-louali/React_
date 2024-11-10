import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="btn btn-primary" to="/Login/">Login</Link>
                <Link className="btn btn-secondary ms-3" to="/Signin/">Signin</Link>
            </div>
        </nav>
    </div>
  );
}

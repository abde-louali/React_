import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/Form/" className="btn btn-primary me-2">Add User</Link>
        <Link to="/Table/" className="btn btn-primary">All Users</Link>
      </div>
    </nav>
  );
}

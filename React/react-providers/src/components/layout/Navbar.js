import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/Productstor/">Pruduct Stor</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/AddProduct/">Add product</Link>
                </li>
                
                </ul>
            </div>
        </nav>
    </>
  )
}

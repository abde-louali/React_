import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Backtostor, Goprofile, Logout } from '../../redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from '../work/Search';

export default function Navbar() {
  const islogin = useSelector((state) => state.logingin);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isprofile = useSelector(state=>state.isprofile)
  return (
    <>
    {
      !isprofile ?
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Left Side of Navbar */}
        <Link className="navbar-brand" to="/Home/">
          Home
        </Link>

        {/* Navbar Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Card/">
                Carts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products/">
                Products
              </Link>
            </li>
          </ul>
          <div className="d-flex mx-auto">
            <Search />
          </div>
          <ul className="navbar-nav ms-auto">
            {islogin ? (
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.username}
                </span>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <button className="dropdown-item" onClick={() => dispatch(Logout())}>
                      Log out
                    </button>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={'/Profilepage/'}  onClick={()=>dispatch(Goprofile())}>
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
            ) 
            
            : 
            
            (
              <li className="nav-item">
              <button className="btn btn-primary btn-sm ms-2"onClick={() => navigate('/Login/')}>Log in </button>
              <button  className="btn btn-secondary btn-sm ms-2" onClick={() => navigate('/Signin/')}> Sign up</button>
            </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    :
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container">
    <Link className="navbar-brand fw-bold" to="/Products/" onClick={() => dispatch(Backtostor())}>
      <i className="bi bi-arrow-left"></i> Back to Store
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/Statistic/">
            <i className="bi bi-graph-up"></i> Statistics
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/Updatepage/">
            <i className="bi bi-gear"></i> Edit Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-semibold" to="/Hestory/">
            <i className="bi bi-clock-history"></i> History
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    }
    </>
  );
}

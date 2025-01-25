
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Addusers } from '../../redux/action';

export default function Signin() {
  const [user, setuser] = useState({
    Fname: '',
    Lname: '',
    email: '',
    username: '',
    password: ''
  });

  const disable = user.Fname === '' || user.Lname === '' || user.email === '' || user.username === '' || user.password === '';
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function Add() {
    fetch('http://localhost:3000/users', {
      method: 'Post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(user)
    })
    .then(()=>navigate('/Login/'))
    //    .then(fetch("http://localhost:3000/users"))
       
         setuser({  Fname:'',Lname:'',email:'',username:'',password:''})
  }

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((resp) => dispatch(Addusers(resp)));
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4 border border-3" style={{width:'600px',marginLeft:"350px"}}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={user.Fname}
            onChange={(e) => setuser({ ...user, Fname: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={user.Lname}
            onChange={(e) => setuser({ ...user, Lname: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            onChange={(e) => setuser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
          />
        </div>
        <button className="btn btn-primary btn-block" onClick={Add} disabled={disable}>
          Register
        </button>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/Login/">Log in</Link>
        </p>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Addcorrectuser, Addusers } from '../../redux/action';

export default function Login() {
  const [user, setuser] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userslist);
  const logeeduser = users.find(
    (usr) => usr.username === user.username && usr.password === user.password
  );
   // function stokuser(username,password){
        //     fetch(`http://localhost:3000/users?username=${username}&passeord=${password}`)
        //     .then(res=>res.json())
        //     .then(resp=>dispatch(Addcorrectuser(resp)))
        // }
  function Log() {
    if (logeeduser) {
      navigate('/Products/');
      dispatch(Addcorrectuser(user));
    } else {
      alert('Password or username incorrect!');
    }
    // setuser({ username: '', password: '' });
  }
 useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((resp) => dispatch(Addusers(resp)));
  });
  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4 border border-3" style={{width:'600px',marginLeft:"350px"}}>
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
        <button className="btn btn-primary btn-block" onClick={Log}>
          Login
        </button><br />
        <span>don't you have an account ?<Link to={'/Signin/'}>Sign in</Link> </span>
      </form>
    </div>
  );
}

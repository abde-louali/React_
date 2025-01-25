import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [user, setuser] = useState({
    Fname: '',
    Lname: '',
    email: '',
    username: '',
    password: ''
  });
   //   const theuser = useSelector(state=>state.userslist)
  const navigate = useNavigate();
  const conecteduser = useSelector(state => state.user);

  useEffect(() => {
       //   async function getuser(){
        //     const  reponse = await fetch(`http://localhost:3000/users?username=${conecteduser.username}&passeord=${conecteduser.password}`)
        //     const result = await reponse.json()
        //     setuser(result)
        //   }
        //   getuser()
    fetch(`http://localhost:3000/users?username=${conecteduser.username}&password=${conecteduser.password}`)
      .then(res => res.json())
      .then(resp => setuser(resp[0]))
      .catch(err => console.error('Error fetching user:', err));
  }, [conecteduser]);

  function Updateuser() {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-type": 'application/json' },
      body: JSON.stringify(user)
    })
    .then(() => navigate('/Profilepage/'))
    .catch(err => console.error('Error updating user:', err));
  }

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 ">Update Your Profile</h1>
      <form onSubmit={(e) => e.preventDefault()} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={user.Fname}
            onChange={(e) => setuser({ ...user, Fname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={user.Lname}
            onChange={(e) => setuser({ ...user, Lname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            onChange={(e) => setuser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={Updateuser}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Update;

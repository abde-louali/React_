import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetails() {
  const [userdetails, setUserdetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(res => setUserdetails(res.data));
  }, [id]);

  return (
    <div className="container mt-4">
      {userdetails && (
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{userdetails.name}</h1>
            <h3 className="card-subtitle mb-2 text-muted">{userdetails.cin}</h3>
            <p className="card-text">{userdetails.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}

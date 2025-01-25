import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { deleteu } from '../../redux/Actions';
import Pagetitle from '../layout/Pagetitle';

export default function Allusers() {
  const data = useSelector(state=>state.listusers)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
   <>
    <Navbar/>
    <Pagetitle message={'ALL USERS PAGE '}/>
    <div className="container mt-4">
   
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Cin</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.cin}>
              <td>{user.cin}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={()=>navigate(`/Updatepage/${user.cin}`)} > Edite</button>
               
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={()=>dispatch(deleteu(user.cin))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  );
}

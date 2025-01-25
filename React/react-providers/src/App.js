import logo from './logo.svg';
import './App.css';
import { Data } from './Storeddata/Storeddata';
import {  useEffect, useState } from 'react';
import Ajoutepage from './components/Works/Ajoutepage';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import AddProduct from './components/pages/AddProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productstor from './components/pages/Productstor';
import axios from 'axios';
import Update from './components/pages/Update';
import './Styles.css';

function App() {
  const [Productsdata,setdata] = useState()
  const idd = useParams()
  function Delete(id){
    axios.delete(`http://localhost:3000/Products/${id}`)
    const newlist = Productsdata.filter(prd=>prd.id !== id )
    setdata(newlist)
  }
  useEffect(()=>{
    fetch("http://localhost:3000/Products")
    .then(res=>res.json())
    .then(res=>setdata(res))
  },[Productsdata])

  return (
    <div>
      <BrowserRouter>
      <Data.Provider value={{Productsdata,setdata,Delete,Update}}>
      <Navbar/>
      <Routes>
        <Route path='/AddProduct/' element={<AddProduct/>}/>
        <Route path='/Productstor/' element={<Productstor/>}/>
        <Route path='/Update/:id' element={<Update/>}/>
      
      </Routes>
      </Data.Provider>
      </BrowserRouter>
     
   
    </div>
  );
}

export default App;

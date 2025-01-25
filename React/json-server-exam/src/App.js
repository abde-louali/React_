import logo from './logo.svg';
import './App.css';
import Ajoute from './components/Pages/Ajoute';
import Table from './components/Pages/Table';
import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Update from './components/Pages/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [Product,setproduct] = useState({
    category:'',
    name:'',
    price:''
  }) 
  const [Productlist,setproductlist] = useState([])
  function Add(){
   
    fetch("http://localhost:3000/products",{
      method : "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body :JSON.stringify(Product)
    })
    setproduct({...Product,category:"",name:'',price:''})
  }
useEffect(()=>{
  axios.get("http://localhost:3000/products")
  .then(res=>setproductlist(res.data))
  // fetch("http://localhost:3000/products")
  // .then(res=>res.json())
  // .then(res=>setproductlist(res))
})

function DetetePRD(id){
  axios.delete(`http://localhost:3000/products/${id}`)
}
  return (
    <div className="App">
    
      <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/Ajoute/" element={<Ajoute Product={Product} setproduct={setproduct} OnAdd={Add}/>} />
                    <Route path="/Table/" element={<Table ProductList={Productlist} Ondelete={DetetePRD}/>}/>
                    <Route path="/Update/:id" element={<Update/>}/>
                </Routes>
            </BrowserRouter>
      
      
    </div>
  );
}

export default App;

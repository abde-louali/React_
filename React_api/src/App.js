import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Product from './components/workplace/Product';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import ProductsP from './pages/ProductsP';
import Cart from './pages/Cart';
import { Productreload } from './components/workplace/ProductRelod';
import { Cartdata } from './StoredData/StoedData';
import {  useState } from 'react';
import Slide from './components/layout/Slide';
import Swal from 'sweetalert2';



function App() { 
  const [cart,setcartData] = useState([])
  // function for adding products into cart 
  function AddTcart(Product) {
    let Isoncart = cart.find(prd => prd.id == Product.id);
    
    if (Isoncart) {
      Swal.fire({
        title: "Product already exists !",
        text: "Are you sure you want to add it again?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!"
      }).then((result) => {
        if (result.isConfirmed) {
          const newcarts = cart.map((prd) => {
            if (prd.id == Product.id) {
              prd.qte = prd.qte + 1; 
            }
            return prd; 
          });
          setcartData([...newcarts]);
          Swal.fire({
            title: "Added!",
            text: "Your product cart has been add.",
            icon: "success"
          });
        } else {
          setcartData([...cart]);
          Swal.fire({
            title: "Cancelled",
            text: "Your imaginary Product are note added agin:)",
            icon: "error"
          })
        }
      });
    } else {
      setcartData([...cart, {...Product, qte: 1}]);
      Swal.fire({
        icon: "success",
        title: "Product Added sucessfuly !",
      
      })
    }
  }
  
//  function for delete product from the cart 
function deleteP(product){
  let newlist = cart.filter(prd=>prd.id !== product.id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      setcartData(newlist)
      Swal.fire({
        title: "Deleted!",
        text: "Your product cart has been deleted.",
        icon: "success"
      });
    }
  });
  

}
//  function for adding the quntity of a product 
function AddQuntity(product){
 let neslist =  cart.map((prd)=>{
    if(prd.id == product.id){
      prd.qte = prd.qte +1
    }return prd
  })
  setcartData(neslist)
}

//  function for minist the quntity of a product 
function MinisQuntity(product){
  let neslist =  cart.map((prd)=>{
     if(prd.id == product.id){
        if(prd.qte > 1){
        prd.qte = prd.qte -1
        // }else{
        // let list =  cart.filter(prd=>prd.id !== product.id)
        // setcartData(list)
        }
     }return prd
   })
   setcartData(neslist)
 }

  return (
    <div className="App">
      <BrowserRouter>
      <Cartdata.Provider value={{cart,setcartData,AddTcart,deleteP,AddQuntity,MinisQuntity}}>
      <Navbar/>
      <Routes>
        <Route path='/ProductsP/:id/:category' element={<Productreload/>} />   
        <Route path='/ProductsP/' element={<ProductsP/>}/>
        <Route path='/Cart' element ={<Cart/>} />
        <Route path='/Home' element ={<Home/>} />
      </Routes> 
 
      </Cartdata.Provider>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

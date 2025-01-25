import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import stor from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Card from './components/pages/Card';
import Products from './components/pages/Products';
import Navbar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/pages/Product';
import Signin from './components/pages/Signin';
import Login from './components/pages/Login';
import Payment from './components/pages/Payment';
import Hestory from './components/pages/Hestory';
import Profilepage from './components/pages/Profilepage';
import Updatepage from './components/pages/Updatepage';
import Statistic from './components/pages/Statistic';

function App() {
  
  return (
<Provider store={stor}>
<div className="App">
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='\' element={<Home/>}/>
    <Route path='Card' element={<Card/>}/>
    <Route path='Products' element={<Products/>}/>
    <Route path='/Product/:id/:category' element={<Product/>}/>
    <Route path='Signin' element={<Signin/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='/Payment/:id' element={<Payment/>}/>
    <Route path='Payment' element={<Payment/>}/>
    <Route path='Hestory' element={<Hestory/>}/>
    <Route path='Hestory' element={<Hestory/>}/>
    <Route path='Profilepage' element={<Profilepage/>}/>
    <Route path='Updatepage' element={<Updatepage/>}/>
    <Route path='Statistic' element={<Statistic/>}/>
   </Routes>
   </BrowserRouter>
  </div>
</Provider>
  );
}

export default App;

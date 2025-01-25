import logo from './logo.svg';
import './App.css';
import Login from './components/work/Login';
import { Provider } from 'react-redux';
import stor from './redux/Stor';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Adduser from './components/pages/Adduser';
import Navbar from './components/layout/Navbar';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allusers from './components/pages/Allusers';
import Update from './components/work/Update';
import Updatepage from './components/pages/Updatepage';
import Home from './components/pages/Home';
function App() {
 const [log,setlog] = useState(false)

  return (
    <Provider store={stor}>
    <div className="App">
      <BrowserRouter>
       {
        !log ? 
        <Login Loogin={()=>setlog(true)}/> 
        :
        <Routes>
        <Route path='Navbar' element={ <Navbar/>}/>
        <Route path='Home' element={ <Home/>}/>
        <Route  path='Adduser' element={<Adduser/>}/>
        <Route  path='Allusers' element={<Allusers/>}/>
        <Route  path='/Updatepage/:cin/' element={<Updatepage/>}/>
      </Routes>
       }
      </BrowserRouter>
   
    </div>
    </Provider>
  );
}

export default App;

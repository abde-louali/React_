import './App.css';
import { Provider } from 'react-redux';
import stor from './redux/Stor';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Adduser from './components/pages/Adduser';
import Navbar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allusers from './components/pages/Allusers';
import Updatepage from './components/pages/Updatepage';
import Home from './components/pages/Home';
function App() {
  return (
    <Provider store={stor}>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='Home' element={ <Home/>}/>
        <Route  path='Adduser' element={<Adduser/>}/>
        <Route  path='Allusers' element={<Allusers/>}/>
        <Route  path='/Updatepage/:cin/' element={<Updatepage/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
    </Provider>
  );
}

export default App;

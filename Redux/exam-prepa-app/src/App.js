import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import stor from './redux/stor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './cpmponents/layout/Navbar';
import Aoute from './cpmponents/pages/Aoute';
import Table from './cpmponents/pages/Table';
import Search from './cpmponents/Search';
import Update from './cpmponents/pages/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Provider store={stor}>
     <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='Aoute' element={<Aoute/>}/>
          <Route path='Table' element={<Table/>}/>
          <Route path='/Update/:cin/' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
  
     </div>
   </Provider>
  );
}

export default App;

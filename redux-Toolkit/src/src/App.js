import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import stor from './redux/stor';
import Ajoute from './components/Ajoute';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 <Provider store={stor}>
     <div className="App">
     <Ajoute/>
     <Table/>
     </div>
 </Provider>
  );
}

export default App;

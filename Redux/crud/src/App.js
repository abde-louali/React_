import logo from './logo.svg';
import './App.css';
import Ajoute from './Components/Ajoute';
import { Provider } from 'react-redux';
import stor from './redux/stor';
import Tablou from './Components/Tablou';
function App() {
  return (
 <Provider store={stor}>
     <div className="App">
     <Ajoute/>
     <Tablou/>
    </div>
 </Provider>
  );
}

export default App;

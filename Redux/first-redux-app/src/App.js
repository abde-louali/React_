import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Cakecontainer from './components/Cakecontainer';
import stor from './redux/store';

function App() {
  return (
    <Provider store={stor}>
    <div className="App">
       <Cakecontainer/>
    </div>
    </Provider>
  );
}

export default App;

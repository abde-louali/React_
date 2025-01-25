import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import stor from './redux/stor';
import Addusers from './components/Addusers';
import Getusers from './components/Getusers';

function App() {
  return (
  <Provider store={stor}>
      <div className="App">
        <Addusers/>
        <Getusers/>
    </div>
  </Provider>
  );
}

export default App;

import './App.css';
import { useDispatch } from 'react-redux';
import { FETCH_STG_REQUEST } from './store/reducer';

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
         <button onClick={()=>dispatch({type :FETCH_STG_REQUEST})}>initialiser la requete </button>
    </div>
  );
}

export default App;

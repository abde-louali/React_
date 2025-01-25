import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searching, Searchvall } from '../../redux/action';

function Search() {
    const searchvall = useSelector(state=>state.categorysearchvall)
    const dispatch = useDispatch()
  return (
    <form className="d-flex " onSubmit={e=>e.preventDefault()}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="category or brand"
        aria-label="Search"
        value={searchvall}
        onChange={e=>dispatch(Searchvall(e.target.value))}
      />
      <button className="btn btn-outline-success" onClick={()=>dispatch(searching())}>
        Search
      </button>
    </form>
  );
}

export default Search;

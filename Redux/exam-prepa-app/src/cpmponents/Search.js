import React from 'react';
import { useDispatch } from 'react-redux';
import { ClickBtnSearchUser, searchuser } from '../redux/actions';

function Search() {
  const dispatch = useDispatch();
  return (
    <div className="mb-4">
      <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search by CIN"
          onChange={(e) => dispatch(searchuser(e.target.value))}
        />
        <button className="btn btn-primary" onClick={() => dispatch(ClickBtnSearchUser())}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

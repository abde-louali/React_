import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../User';
import { ClickBtnSearchUserToFalse } from '../../redux/actions';
import Search from '../Search';

function Table() {
  const data = useSelector((state) => state.list);
  const searchValue = useSelector((state) => state.searchVall);
  const isClicked = useSelector((state) => state.issearch);
  const dispatch = useDispatch();

  let filteredList = isClicked && searchValue 
    ? data.filter((user) => user.cin === searchValue) 
    : data;

  useEffect(() => {
    dispatch(ClickBtnSearchUserToFalse());
  }, [searchValue]);

  return (
    <div className="container">
      <h1 className="mb-4">User Management</h1>
      <Search />
      {filteredList.map((user) => (
        <User user={user} key={user.cin} />
      ))}
    </div>
  );
}

export default Table;

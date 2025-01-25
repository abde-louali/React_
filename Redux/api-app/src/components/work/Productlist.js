import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { falsesearching, Requestsucces, sendRequest } from '../../redux/action';
import SingleProdact from './SingleProdact';

export default function Productlist() {
  const dispatch = useDispatch();
  //  const [data, setData] = useState([]);
  const datap = useSelector(state => state.Apidata)
  useEffect(() => {
    const fetchData = async () => {
      // dispatch(sendRequest('https://fakestoreapi.in/api/products'));
      const response = await fetch('https://fakestoreapi.in/api/products');
      const result = await response.json();
      dispatch(Requestsucces(result.products));
      // setData(result.producs)
      // fetch("http://localhost:3000/Products",{
      //   method:'post',
      //   headers:{"Content-type":'application/json'},
      //   body:JSON.stringify(result.products)
      // })
    };
    fetchData();
  }, [dispatch]);
  // console.log(datap)
  const searchvall = useSelector(state=>state.categorysearchvall)
  const issearching = useSelector(state=>state.issearching)
  useEffect(()=>{
    dispatch(falsesearching())
  },[searchvall])
  let newlist;
   searchvall && issearching ? newlist = datap.filter(prd=>prd.brand === searchvall || prd.category === searchvall ) : newlist = datap


  return (

    <div className='row'>
      {
        newlist.length > 0 ?
        
        newlist.map(prd => {
          return <div className='col-2 my-2 ms-4 mx-3 '><SingleProdact key={prd.id} Product={prd} />
          {/* {console.log(prd.id)} */}
          </div>
        }):
        <></>
      }

    </div>
  );
}

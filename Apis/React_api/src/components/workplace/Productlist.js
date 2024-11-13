import React, { useEffect, useState } from 'react'
import Singlproduct from './Singlproduct'
import Search from './Search'
import Slide from '../layout/Slide'

export default function Productlist() {
    const [Productslists,setproductlist] = useState([])
    const [Serachprd,setprd] = useState('')
    const [issearch,setsearch] = useState(false)
    // this use effect for taking the data from the api 
   useEffect(()=>{
    Promise.all([
      fetch("https://fakestoreapi.in/api/products").then(res => res.json()),
      fetch("https://fakestoreapi.in/api/products?page=2").then(res => res.json())
  ])
    .then(([res1,res2])=>{
      setproductlist([...res1.products,...res2.products])
    })

   },[])
// this funtion is to make sure that the not empty
   function Onsearch(){
    if(Serachprd !== ''){
    setsearch(true)
   }
  }
  useEffect(()=>{
    if(Serachprd === ''){
      setsearch(false)
    }
  },[Serachprd])

   let filterdList ;
   {Serachprd && issearch ? filterdList = Productslists.filter(prd=>prd.category == Serachprd) : filterdList = Productslists }


  return (
    <>
     <Search vall={Serachprd} setvall={setprd} onsearch={Onsearch}/>
    <div className='row'>
    {filterdList.map(prd=>{
     return  <Singlproduct Product={prd} key={prd.id} path={`/ProductsP/${prd.id}/${prd.category}`} />
    })}
    </div>
  </>
  )
}

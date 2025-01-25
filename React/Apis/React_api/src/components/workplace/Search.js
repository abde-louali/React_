import React from 'react'

export default function Search({onsearch,vall,setvall}) {
  return (
    <>
    <input className=" ms-5 " type="text" placeholder="Search" style={{width:"400px", marginLeft:"1000px"}} value={vall}
     onChange={e=>setvall(e.target.value)}/>
    <button className="btn btn-outline-success" onClick={onsearch} >Search</button>
    </>
  )
}

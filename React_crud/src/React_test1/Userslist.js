import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Userslist({list,onedit,ondelete}) {
  return (
    <div>
       <table  className='table table-striped'>
        <thead>
         <tr> 
         <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
         </tr>
            </thead>
            {
              list.map((stg)=>{
                return <tbody key={stg.id}>
                  <tr scope="row" >
                    <td>{stg.id}</td>
                    <td>{stg.name}</td>
                    <td>
                      <button style={{borderRadius:"5px ", marginTop:'10px',background:"blue" ,color:"white", marginRight:'5px'}} onClick={ ()=>onedit(stg.id)}>Edit</button>
                      <button style={{borderRadius:"5px ", marginTop:'10px',background:"red" ,color:"white"}} onClick={()=>ondelete(stg.id)}>Delete</button>
                    </td>
                  </tr>
                  </tbody> 
                
           
         })
          }
       </table>
    </div>
  )
}

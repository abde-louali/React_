import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletstg, editstg } from '../redux/reducer'


function Table() {
    // const stagaires = useSelector(state=>state.stagaire)
    const stagaires = useSelector(state=>state.stgs.stagaire)
    const dispatch = useDispatch()
    
  return (
    <div className="container">
        <table className="table table-striped table-bordered mt-4">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Filier</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { 
                    stagaires.map(stg=>{
                        return <tr key={stg.num}>
                            <td>{stg.num} </td>
                            <td>{stg.name} </td>
                            <td>{stg.filier} </td>
                          <td><button className='btn btn-danger' onClick={()=>dispatch(deletstg(stg.num))} >Delete</button></td>
                          <td><button className='btn btn-primary' onClick={()=>dispatch(editstg(stg.num))}>Edit</button></td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default Table
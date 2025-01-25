import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletstg, editstg } from '../redux/actions'

function Table() {
    // const stagaires = useSelector(state=>state.stagaire)
    const stgs = useSelector(state=>state.stagaire)
    const dispatch = useDispatch()
    
  return (
    <div className="container">
        <table className="table table-striped table-bordered mt-4">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Filier</th>
                    {/* <th>Notes</th> */}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { 
                    stgs.map(stg=>{
                        return <tr key={stg.num}>
                            <td>{stg.num} </td>
                            <td>{stg.name} </td>
                            <td>{stg.filier} </td>
                            {/* <td>{stg.notes.map(note=>{
                                return <td key={stg.num}>{note}</td>
                            })}</td> */}
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
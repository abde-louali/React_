import React from 'react'

export default function Table({List,vall,isclicked}) {
    let newlist ;
    vall && isclicked ? newlist = List.filter(stg=>stg.id == vall) : newlist = List
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>NAme</td>
                    <td>Email</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                  
                    newlist.map((stg)=>{
                        return <tr key={stg.id}>
                        <td>{stg.id}</td>
                        <td>{stg.name}</td>
                        <td>{stg.email}</td>
                        <td>{stg.age}</td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

import React from 'react'
import Ajoute from '../work/Ajoute'
import Navbar from '../layout/Navbar'
import Pagetitle from '../layout/Pagetitle'
export default function Adduser() {
  return (
    <div>
       <Navbar/>
       <Pagetitle message={'ADD USERS PAGE '}/>
     <Ajoute/>
    </div>
  )
}

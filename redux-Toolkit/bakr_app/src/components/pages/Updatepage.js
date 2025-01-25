import React from 'react'
import Update from '../work/Update'
import { useParams } from 'react-router-dom'
import Pagetitle from '../layout/Pagetitle'

export default function Updatepage() {
    const id = useParams()
  return (
    <div>
        <Pagetitle message={'UPDATE USERS PAGE '}/>
        <Update id={id} />
    </div>
  )
}

import React from 'react'
import { buycake } from '../redux/cakeActions'
import { connect, useDispatch, useSelector } from 'react-redux'

function Cakecontainer({props}) {
    const counter = useSelector(state=>state.counter)
     const dispatch = useDispatch()

  return (
    <div>
        <h1>cake counter - {counter} </h1>
        <button onClick={()=>dispatch(buycake())}>Buy</button>
    </div>
  )

}

export default  (Cakecontainer)
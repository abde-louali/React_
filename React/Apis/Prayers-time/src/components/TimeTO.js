import React from 'react'

export default function TimeTO({prayer,timing}) {
  return (
    <div>
      <h2>Next prayer is {prayer} </h2>
      <h4>{timing}</h4>
    </div>
  )
}

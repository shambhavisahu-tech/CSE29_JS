import React from 'react'

function Student({prop}) {
  return (
    <div >
    <img src={props.image} alt="Student"/>
    <h2>{props.name}</h2>
    <p>{props.about}</p>
    <button>contact me</button>
    </div>
  )
}

export default Student

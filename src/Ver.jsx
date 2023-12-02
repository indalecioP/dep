import React from 'react'

export default function Ver({arreglo, counter, handleClick}) {
  return (
    <div>     
      <button onClick={handleClick}>siguiente</button>
      <p>{arreglo[counter]}</p>
    </div>
  )
}

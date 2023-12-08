import React from 'react'

export default function Ver({arreglo, counter, handleClick}) {
  return (
    <div className='flex justify-center items-center gap-2'>     
      <button className='button text-sm p-4' onClick={handleClick}>siguiente</button>
      <p>{arreglo[counter]}</p>
    </div>
  )
}

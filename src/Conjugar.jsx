import React from 'react'

export default function Conjugar({arreglo, counter, handleClick}) {
  return (
    <div>
      <input id='fffffffff' 
        onChange={(e)=>{
          if (e.target.value == arreglo[counter].split(' ')[0]){
            handleClick()
            e.target.value = ''
          }
        }}
      />
      {
        counter != -1 &&  <span>{arreglo[counter].split(' ').slice(1).join(' ')}</span>
      }
    </div>
  )
}

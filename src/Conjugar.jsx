import React from 'react'

export default function Conjugar({arreglo, counter, handleClick}) {
  
  const inp = ['input1','input2','input3','input4','input5','input1','input1']
  // const long = arreglo[counter].split(' ')[0].length 
  let long;
  {
    counter != -1 ? long = arreglo[counter].split(' ')[0].length - 1 : 0
  }
  return (
    <div className='flex justify-center gap-2'>
      <input className={
        counter==-1?`text-black px-2 w-14`:inp[Math.floor(long/2)]} id='fffffffff' 
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

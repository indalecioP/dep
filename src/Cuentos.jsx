import { useState } from 'react'
import GapMapRandom from './GapMapRandom'
import { cuentosA2 } from './cuentosA2'

export default function Cuentos() {

  const [cuento, setCuento] = useState(cuentosA2['Mari'].split('.').map(e => (e.trim() + '.').split(' ')))

  return (
    <div className='flex'>
      <div className='bg-slate-600 mt-10 ml-10 p-6 h-24 rounded-md'>
        <h1>cuentos</h1>
        <select className='text-black' id='sel'
          onChange={(e) => { setCuento(cuentosA2[e.target.value].split('.').map(e => (e.trim() + '.').split(' '))) }}
        >
          {
            Object.keys(cuentosA2).map((e, i) => <option key={i}>{e}</option>)
          }
        </select>
      </div>
      <GapMapRandom frases={cuento} gap={1} />
    </div>
  )
}

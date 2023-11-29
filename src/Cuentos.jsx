import {useContext} from 'react'
import {habla} from './App'

export default function Cuentos() {
  const bla = useContext(habla)
  return (
    <div>Cuentos
        <button onClick={() => bla('hola')}>hola</button>
    </div>
  )
}

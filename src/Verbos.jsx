import { useContext, useState } from 'react'
import { index, ver } from './verbEsp'
import { habla } from './App'

export default function Verbos() {

  const bla = useContext(habla)
  const [counter, setCounter] = useState(-1);
  const [verbo, setVerbo] = useState('ser');
  const handleClick = () => {
    if (counter == index[verbo].frases.length - 1) {
      setCounter(0); bla(index[verbo].frases[0])
    } else {
      setCounter(counter + 1); bla(index[verbo].frases[counter + 1])
    }
  }

  return (
    <div>
      <select id='jjj'
        onChange={(e) => { setVerbo(e.target.value);setCounter(-1) }}
      >
        {
          ver.map((e, i) => <option key={i}>{e}</option>)
        }
      </select>
      <button onClick={handleClick}>siguiente</button>
      {index[verbo].frases[counter]}
    </div>
  )
}
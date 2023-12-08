import { useContext, useState } from 'react'
import { index, ver } from './verbEsp'
import { habla } from './App'
import Conjugar from './Conjugar';
import Ver from './Ver';

export default function Verbos() {

  const bla = useContext(habla)
  const [counter, setCounter] = useState(-1);
  const [verbo, setVerbo] = useState('ser');
  const [ejer, setEjer] = useState(0);


  const handleClick = () => {
    if (counter == index[verbo].frases.length - 1) {
      ejer != ejercicios.length - 1 ? setEjer(ejer + 1) : setEjer(0)
      setCounter(0)
      if (ejer == 0) {
        bla(index[verbo].frases[0])
      } else {
        bla(index[ver[ver.indexOf(verbo) + 1]].frases[0])
        setVerbo(ver[ver.indexOf(verbo) + 1])
      }
    } else {
      setCounter(counter + 1); bla(index[verbo].frases[counter + 1])
    }
  }
  const ejercicios = [
    <Ver arreglo={index[verbo].frases} counter={counter} handleClick={handleClick} />,
    <Conjugar arreglo={index[verbo].frases} counter={counter} handleClick={handleClick} />
  ]

  return (
    <div className='grid grid-cols-1 justify-end gap-10'>
      <div className='flex justify-center'>
        <select className='text-black' id='jjj'
          onChange={(e) => { setVerbo(e.target.value); setCounter(-1) }}
        >
          {
            ver.map((e, i) => <option key={i}>{e}</option>)
          }
        </select>
      </div>
      {
        ejercicios[ejer]
      }
      <div className='flex justify-center'>
        <img src={index[verbo].img[counter]} width={200} />
      </div>
    </div>
  )
}

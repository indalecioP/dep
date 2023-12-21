import PropTypes from 'prop-types';
import { useState, useId, useContext, useEffect } from 'react'
import {habla} from './App'

export default function GapMapRandom({ frases }) {

  const bla = useContext(habla)
  const id = useId()
  const [count, setCount] = useState(0);  
  const [fra,setFra] = useState(frases);
  useEffect(() => {
    setFra(frases)
  }, [frases])
  

  const [gaps] = useState(fra.map(e => Math.floor(Math.random() * (e.length - 2) + 1)));

  return (
    <div className='w-1/3 mx-auto mt-10'>
      {
        fra.map((e, i) =>
          <span key={i} className={count==i?'my-18 text-2xl bg-gris2':'my-18 text-2xl'}>
            <span
              className={i==0? 'ml-6':null}
              onClick={() => bla(e.join(' '))}> {e.slice(0, gaps[i]).join(' ') + ' '}  
              </span>
            <input id={id + i}
              className='w-14 px-2 text-black text-sm'
              onChange={(e1) => {
                if (e1.target.value == e[gaps[i]].replace(',', '')) {
                  if (i < fra.length - 1) {
                    bla(fra[i + 1].join(' '))
                    document.getElementById(id + (i + 1)).focus()
                    setCount(count + 1)
                  } else {
                    alert('bravo')
                  }
                }
              }}
            />
            <span> {e.slice(gaps[i] + 1, e.length).join(' ')}</span>
          </span>)
      }
    </div>
  )
}

GapMapRandom.propTypes = {
  frases: PropTypes.array,
};

import { useState, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Cuentos from './Cuentos'
import Verbos from './Verbos'
import Espa from './Espa'

export const habla = createContext()
var speechMessage = new SpeechSynthesisUtterance();
var voicesSp = []


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <habla.Provider value={hablar}>
        <div className='flex justify-evenly items-center h-40'>
          <div className='flex justify-center'>
            <Link className='button' to='/dep'>español</Link><br />
          </div>
          <div className='flex justify-center'>
            <Link className='button' to='/dep/cuentos'>cuentos</Link><br />
          </div>
          <div className='flex justify-center'>
            <Link className='button' to='/dep/verbos'>verbos</Link><br />
          </div>
        </div>
        <Routes>
          <Route>
            <Route path='/dep' element={<Espa />} />
            <Route path='/dep/cuentos' element={<Cuentos />} />
            <Route path='/dep/verbos' element={<Verbos />} />
          </Route>
        </Routes>
      </habla.Provider>
    </div>
  )
}
document.addEventListener('DOMContentLoaded', (e) => {
  speechSynthesis.addEventListener('voiceschanged', (e) => {
    var voices = speechSynthesis.getVoices()
    voicesSp = voices.find(e => e.name == 'Google español')
  })
})

function hablar(z) {
  speechMessage.text = z
  speechMessage.voice = voicesSp
  speechSynthesis.speak(speechMessage)
}


export default App

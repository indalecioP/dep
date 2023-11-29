import { useState, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Cuentos from './Cuentos'
import Espa from './Espa'

import './App.css'
export const habla = createContext()
var speechMessage = new SpeechSynthesisUtterance();
var voicesSp = []


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <habla.Provider value={hablar}>
        <button onClick={() => hablar('hola')}>hola</button>
        <Link to='/'>español</Link><br />
        <Link to='/cuentos'>cuentos</Link><br />
        <Routes>
          <Route>
            <Route path='/' element={<Espa />} />
            <Route path='/cuentos' element={<Cuentos />} />
          </Route>
        </Routes>
      </habla.Provider>
    </div>
  )
}
document.addEventListener('DOMContentLoaded', (e) => {
  speechSynthesis.addEventListener('voiceschanged', (e) => {
    var voices = speechSynthesis.getVoices()
    voices.forEach(voice => {
      if (voice.lang == 'es-ES') {
        voicesSp.push(voice)
      }
    })
  })
})

function hablar(z) {
  speechMessage.text = z
  speechMessage.voice = voicesSp[0]
  speechSynthesis.speak(speechMessage)
}


export default App

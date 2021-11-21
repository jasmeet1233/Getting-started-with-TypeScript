import { useState } from 'react'
import Greet from './components/Greet'
import Person from './components/Person'

function App() {
  const personName = {
    fname: 'Bruce',
    lname: 'wayne'
  }

  return (
    <div className="App">
     <Greet name = 'Jasmeet' messageCount = {20} isLoggedIn = {false}/>
     <Person name = {personName}/>
    </div>
  )
}

export default App

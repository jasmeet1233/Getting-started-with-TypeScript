import { useState } from 'react'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {
  const personName = {
    fname: 'Bruce',
    lname: 'wayne'
  }

  const personList = [
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "prince",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
     <Greet name = 'Jasmeet' messageCount = {20} isLoggedIn = {false}/>
     <Person name = {personName}/>
     <PersonList name = {personList}/>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'

function App() {

  function newPoll(topic, options) {
    const newData = JSON.stringify({topic, options})
    fetch('http://localhost:8000/new', {
      method: 'POST',
      body: newData,
      headers: {
        "Content-type": "application/json"
      }
    }).then(response=>console.log(response.json))
  }

  return (
    <div className="App container-fluid">
      <Homepage newPoll={newPoll} />
    </div>
  )
}

export default App

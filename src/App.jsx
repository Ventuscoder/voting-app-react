import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'

function App() {

  const [isHomepage, setIsHomepage] = useState(true)
  const [isNewpollpage, setIsNewpollpage] = useState(false)
  const [isPollpage, setIsPollpage] = useState(false)

  function newPoll(topic, options) {
    const newData = JSON.stringify({topic, options})
    fetch('http://localhost:8000/new', {
      method: 'POST',
      body: newData,
      headers: {
        "Content-type": "application/json"
      }
    }).then(response=>response.json()).then(json=>console.log(json))
  }

  return (
    <div className="App container-fluid">
      {isHomepage && <Homepage newPoll={newPoll} />}
    </div>
  )
}

export default App

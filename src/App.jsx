import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'
import NewPollPage from './pages/newpollpage'

function App() {

  const [isHomepage, setIsHomepage] = useState(true)
  const [isNewpollpage, setIsNewpollpage] = useState(false)
  const [isPollpage, setIsPollpage] = useState(false)
  const [currentPollId, setCurrentPollId] = useState('')
  console.log(currentPollId)

  function newPoll(topic, options) {
    const newData = JSON.stringify({topic, options})
    fetch('http://localhost:8000/new', {
      method: 'POST',
      body: newData,
      headers: {
        "Content-type": "application/json"
      }
    }).then(response=>response.json()).then(json=>{
      setCurrentPollId(json._id)
      console.log(currentPollId)
      setIsHomepage(false)
      setIsNewpollpage(true)
    })
  }

  return (
    <div className="App container-fluid">
      {isHomepage && <Homepage newPoll={newPoll} />}
      {isNewpollpage && <NewPollPage pollId={currentPollId} />}
    </div>
  )
}

export default App

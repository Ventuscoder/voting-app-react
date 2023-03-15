import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'
import NewPollPage from './pages/newpollpage'
import PollPage from './pages/pollpage'

function App() {

  const [isHomepage, setIsHomepage] = useState(true)
  const [isNewpollpage, setIsNewpollpage] = useState(false)
  const [isPollpage, setIsPollpage] = useState(false)
  const [currentPollId, setCurrentPollId] = useState('')
  const [currentPollData, setCurrentPollData] = useState({})
  const [pollDataLoaded, setPollDataLoaded] = useState(false)
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

  function enterPoll(code) {
    /* const data = await fetch(`http://localhost:8000/enter/${code}`)
    if (data == 'Data not found') {
      setCurrentPollData(JSON.parse(data))
      setIsHomepage(false)
      setIsPollpage(true)
    } */
    fetch(`http://localhost:8000/enter/${code}`).then(response=>{
      if (response != 'Data not found') {
        response.json().then(json=>{setPollDataLoaded(true);setCurrentPollData(json)})
      }
      setIsHomepage(false)
      setIsPollpage(true)
    })
  }

  return (
    <div className="App container-fluid">
      {isHomepage && <Homepage newPoll={newPoll} enterPoll={enterPoll} />}
      {isNewpollpage && <NewPollPage pollId={currentPollId} />}
      {isPollpage && <PollPage hasError={!pollDataLoaded} pollData={currentPollData} />}
    </div>
  )
}

export default App

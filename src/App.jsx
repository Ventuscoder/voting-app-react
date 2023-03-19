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
  const [loading, setLoading] = useState(false)
  console.log(currentPollId)

  function newPoll(topic, options) {
    setLoading(true)
    const newData = JSON.stringify({topic, options})
    fetch('https://voting-app-server-e3h5.onrender.com/new', {
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
      setLoading(false)
    })
  }

  function enterPoll(code) {
    /* const data = await fetch(`http://localhost:8000/enter/${code}`)
    if (data == 'Data not found') {
      setCurrentPollData(JSON.parse(data))
      setIsHomepage(false)
      setIsPollpage(true)
    } */
    setLoading(true)
    fetch(`https://voting-app-server-e3h5.onrender.com/enter/${code}`).then(response=>{
      if (response != 'Data not found') {
        response.json().then(json=>{
          setPollDataLoaded(true);
          setCurrentPollData(json);
          setIsHomepage(false);
          setIsPollpage(true);
          setLoading(false)
        })
      }
    })
  }

  return (
    <div className="App container-fluid">
      {isHomepage && <Homepage newPoll={newPoll} enterPoll={enterPoll} />}
      {isNewpollpage && <NewPollPage pollId={currentPollId} />}
      {isPollpage && <PollPage hasError={!pollDataLoaded} pollData={currentPollData} />}
      {loading && <h2 className='m-2 poll-header'>Loading, please wait...</h2>}
    </div>
  )
}

export default App

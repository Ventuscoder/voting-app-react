import './pollpage.css'
import Option from '../components/option'
import { useState } from 'react'

function PollPage(props) {
    const {pollData, hasError} = props
    const [currentPoll, setCurrentPoll] = useState('')
    const [pollDataState, setPollDataState] = useState(pollData)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    console.log(pollDataState)

    function onSelect(e) {
        setCurrentPoll(e.target.id)
    }

    function onPollSubmit() {
        console.log(pollDataState._id, currentPoll)
        fetch(`http://localhost:8000/update/${pollDataState._id}/${currentPoll}`).then(response=>{
            response.json().then(json=>{setPollDataState(json);setHasSubmitted(true)})
        })
    }

    function loadPoll() {
        return (
            <div>
                <div className='row'>
                    <div className='poll-header m-2'>{pollData.topic}</div>
                    {pollDataState.options.map(option=>(<Option key={option._id} optData={option} id={option._id} hasSelected={currentPoll==option._id} hasSubmitted={hasSubmitted} onSelect={onSelect} />))}
                </div>
                {!hasSubmitted &&
                <button onClick={onPollSubmit} className='submit-poll rounded m-2 p-3'>Submit your response</button>
                }
                {hasSubmitted ? <div className='poll-thanks m-2'><h3>Thank you for voting!</h3></div> : null}
            </div>
        )
    }

    return (
        <div className='poll-page row'>
            {hasError && <p>Sorry, wrong code!</p>}
            {!hasError && loadPoll()}
        </div>
    )
}

export default PollPage
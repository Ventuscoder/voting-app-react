import './pollpage.css'
import Option from '../components/option'
import { useState } from 'react'

function PollPage(props) {
    const {pollData, hasError} = props
    const [currentPoll, setCurrentPoll] = useState('')

    function onSelect(e) {
        setCurrentPoll(e.target.id)
    }

    function onPollSubmit() {
        console.log(pollData._id, currentPoll)
        fetch(`http://localhost:8000/update/${pollData._id}/${currentPoll}`).then(response=>{
            response.json().then(json=>console.log(json))
        })
    }

    function loadPoll() {
        return (
            <div>
                <div className='row'>
                    <div className='poll-header m-2'>{pollData.topic}</div>
                    {pollData.options.map(option=>(<Option key={option._id} optData={option} id={option._id} hasSelected={currentPoll==option._id} hasSubmitted={false} onSelect={onSelect} />))}
                </div>
                <button onClick={onPollSubmit} className='submit-poll rounded m-2 p-3'>Submit your response</button>
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
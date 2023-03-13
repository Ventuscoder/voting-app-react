import { useState } from 'react'
import './newpollpage.css'

function NewPollPage(props) {
    const {pollId} = props
    const [copyStatus, setCopyStatus] = useState('')

    function copyText() {
        navigator.clipboard.writeText(pollId).then(setCopyStatus('Copied code!'))
    }

    return (
        <div className='new-poll-page'>
            <input type="text" value={pollId} className='text-copy' readOnly />
            <button onClick={copyText}>Copy poll code</button>
            <p>{copyStatus}</p>
            <p>Don't forget to save this code and share it with your friends so they can vote!</p>
        </div>
    )
}

export default NewPollPage
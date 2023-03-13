import { useState } from 'react'
import './newpollpage.css'

function NewPollPage(props) {
    const {pollId} = props
    const [copyStatus, setCopyStatus] = useState('')

    function copyText() {
        navigator.clipboard.writeText(pollId).then(setCopyStatus('Copied code!'))
    }

    return (
        <div className='new-poll-page row p-2'>
            <input type="text" value={pollId} className='rounded text-copy p-2 mt-2 col-sm-4' readOnly />
            <button onClick={copyText} className='rounded copy-code-btn col-sm-3 mt-2'>Copy poll code</button>
            <p className='copy-desc'>{copyStatus}</p>
            <p className='copy-desc'>Don't forget to save this code and share it with your friends so they can vote!</p>
            <p className='copy-desc'>View your poll yourself by copying the code and pasting it on the form on our homepage.</p>
            <p className='copy-desc'>Reload the page to get redirected to the homepage</p>
        </div>
    )
}

export default NewPollPage
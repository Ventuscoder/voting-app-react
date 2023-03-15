import './pollpage.css'
import Option from '../components/option'

function PollPage(props) {
    const {pollData, hasError} = props

    function onSelect(e) {
        console.log(e.target.innerText)
    }

    function loadPoll() {
        return (
            <div>
                {pollData.options.map(option=>(<Option optData={option} hasSubmitted={false} onSelect={onSelect} />))}
                <button className='submit-poll rounded'>Submit your response</button>
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
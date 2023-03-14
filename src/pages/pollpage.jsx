import './pollpage.css'

function PollPage(props) {
    const {pollData, hasError} = props
    console.log(pollData)

    return (
        <div className='poll-page row'>
            {hasError && <p>Sorry, wrong code!</p>}
            {!hasError && <p>Poll loaded!</p>}
        </div>
    )
}

export default PollPage
import './pollpage.css'

function PollPage(props) {
    const {pollData, hasError} = props
    console.log(pollData)

    function loadPoll() {
        return (
            <div>
                
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
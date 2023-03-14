import './option.css'

function Option(props) {
    const {optData, hasSubmitted, onSelect} = props
    return (
        <div className='col-sm-2' key={optData._id}>
            <button className='rounded poll-option' onClick={onSelect}>{optData.opt}{hasSubmitted && 'Votes- '+(optData.votes)}</button>
        </div>
    )
}

export default Option
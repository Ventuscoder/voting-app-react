import './option.css'

function Option(props) {
    const {optData, hasSubmitted, onSelect, id, hasSelected} = props

    return (
        <div className='col-sm-4 m-2 poll-div'>
            <button className={hasSelected ? 'rounded poll-option selected' : 'rounded poll-option'} id={id} onClick={onSelect}>{optData.opt}{hasSubmitted && ' (Votes- '+(optData.votes)+')'}</button>
        </div>
    )
}

export default Option
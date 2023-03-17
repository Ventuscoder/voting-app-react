import './option.css'

function Option(props) {
    const {optData, hasSubmitted, onSelect, id, hasSelected} = props

    console.log(hasSelected)

    return (
        <div className='col-sm-4 m-2 poll-div' key={id}>
            <button className={hasSelected ? 'rounded poll-option selected' : 'rounded poll-option'} id={id} onClick={onSelect}>{optData.opt}{hasSubmitted && 'Votes- '+(optData.votes)}</button>
        </div>
    )
}

export default Option
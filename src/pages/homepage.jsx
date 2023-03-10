import './homepage.css'

function Homepage() {
    return (
        <div className="homepage">
            <div className='description pt-4 pb-4 row'>
                <p>Create polls</p>
                <p>Submit votes</p>
                <p>See others votes</p>
                <p>In one app</p>
            </div>
            <div className='options row'>
                <div className="col-md-4 option">New poll</div>
                <div className="col-md-4 option">Vote on a poll</div>
                <div className="col-md-4 option">Check the results of your poll</div>
            </div>
        </div>
    )
}

export default Homepage
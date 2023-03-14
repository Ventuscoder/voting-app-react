import './homepage.css'

function Homepage(props) {
    const {newPoll, enterPoll} = props
    function newPollSubmit(e) {
        e.preventDefault()
        const optionsData = e.target[1].value.split(',')
        let finalOptionsArr = []
        for (let i = 0; i < optionsData.length; i++) {
            finalOptionsArr.push({opt: optionsData[i], votes: 0})
        }
        newPoll(e.target[0].value, finalOptionsArr)
    }

    function enterPollSubmit(e) {
        e.preventDefault()
        const code = e.target[0].value
        enterPoll(code)
    }

    return (
        <div className="homepage">
            <div className='description pt-4 pb-4 row'>
                <p>Create polls</p>
                <p>Submit votes</p>
                <p>See others votes</p>
                <p>In one app</p>
            </div>
            <div className='options row'>
                <p className='desc'>Make a new poll</p>
                <div className="col-md-6 option">
                    <form onSubmit={newPollSubmit}>
                        <input type="text" name='topic' className='topic p-2 mt-2' placeholder='Enter the question or topic of the poll' required />
                        <textarea name="options" className='options-input p-2 mt-2' rows="10" required placeholder='Enter in your options. Note that each option should be separated by a comma and nothing else, for example, a,b,c will create three options a, b and c'>
                            
                        </textarea>
                        <button type="submit" className="new-poll rounded p-2">Create poll</button>
                    </form>
                </div>
                <div className="col-md-6 option">
                    <p className='desc'>Enter a poll</p>
                    <form onSubmit={enterPollSubmit}>
                        <input type="text" name='code' className='code p-2 mt-2 mb-2' placeholder='Enter the poll code' required />
                        <button type="submit" className="enter-poll rounded p-2">Enter poll</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Homepage
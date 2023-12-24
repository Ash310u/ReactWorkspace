import { useState } from "react"

function BookCreate({ onCreate }) {
    const [ title, setTitle ] = useState('')
    const handleSumbit = (e) => {
        e.preventDefault()
        onCreate(title)
        setTitle('')
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSumbit}>
                <label>Title</label>
                <input 
                    type="text"
                    className="input"
                    value={title}
                    placeholder="Add a Book"
                    onChange={e => setTitle(e.target.value)}
                />
                <button className="button" >Submit</button>
            </form>
        </div>
    )
}

export default BookCreate
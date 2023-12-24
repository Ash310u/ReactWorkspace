import { useState } from "react"

function BookCreate({ onCreate }) {
    const [ title, setTitle ] = useState('')
    const handleSumbit = (e) => {
        e.preventDefault()
        onCreate(title)
    }
    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label>Title</label>
                <input 
                    type="text"
                    value={title}
                    placeholder="Add a Book"
                    onChange={e => setTitle(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookCreate
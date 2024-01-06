import { useState } from "react"
import useBooksContext from "../hooks/useBooksContext"

function BookCreate() {
    const [title, setTitle] = useState('')
    
    const { createBook } = useBooksContext()

    const handleSumbit = (e) => {
        e.preventDefault()
        createBook(title)
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
                <button className="button" >Add</button>
            </form>
        </div>
    )
}

export default BookCreate
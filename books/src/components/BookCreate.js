import { useContext, useState } from "react"
import BooksContext from "../context/books"

function BookCreate() {
    const [title, setTitle] = useState('')
    
    const { createBook } = useContext(BooksContext)

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
import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

function App() {
    const [books, setBooks] = useState([])
    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title
            }
        ]
        setBooks(updatedBooks);
    }
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBooks);
    }
    return (
        <div>
            <BookList books={books} deleteBookById={deleteBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App
import { useContext } from "react"
import BooksContext from "../context/books"
import BookShow from "./BookShow"

function BookList({ books, onDelete, onEdit }) {
    let { count, incrementCount } = useContext(BooksContext)

    const listing = books.map(book => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    })

    return (
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click</button>
            {listing}
        </div>
    )
}

export default BookList
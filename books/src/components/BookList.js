import BookShow from "./BookShow"

function BookList({ books, onDelete }) {
    const listing = books.map(book => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} />
    })

    return (
        <div className="book-list">{listing}</div>
    )
}

export default BookList
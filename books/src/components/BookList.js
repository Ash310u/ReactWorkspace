import BookShow from "./BookShow"

function BookList({ books, onDelete, onEdit }) {
    const listing = books.map(book => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    })

    return (
        <div className="book-list">{listing}</div>
    )
}

export default BookList
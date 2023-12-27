import BookShow from "./BookShow"

function BookList({ books, deleteBookById }) {
    const listing = books.map(book => {
        return <BookShow book={book} key={book.id} deleteBookById={deleteBookById} />
    })

    return (
        <div className="book-list">{listing}</div>
    )
}

export default BookList
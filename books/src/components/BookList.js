import BookShow from "./BookShow"

function BookList({ books }) {
    const listing = books.map(book => {
        return <BookShow book={book} key={book.id} />
    })

    return (
        <div className="book-list">{listing}</div>
    )
}

export default BookList
function BookShow({ book, onDelete }) {
    const handleClick = () => {
        onDelete(book.id)
    }
    return (
        <div className="book-show">
            <button onClick={handleClick}>
                clear
            </button>
            <div>{book.title}</div>
        </div>
    )
}

export default BookShow
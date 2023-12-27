function BookShow({ book, deleteBookById }) {
    const handleClick = () => {
        deleteBookById(book.id)
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
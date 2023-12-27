import BookShow from "./BookShow"

function BookList({ books }) {
    const listing = books.map(({ title, id }) => {
        return <BookShow name={title} key={id} />
    })

    return (
        <div>{listing}</div>
    )
}

export default BookList
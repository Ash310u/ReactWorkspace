import BookShow from "./BookShow"

function BookList({ titles }) {
    const listing = titles.map(({ title, id }) => {
        return <BookShow book={title} key={id} />
    })

    return (
        <div>{listing}</div>
    )
}

export default BookList
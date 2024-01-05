import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
    const [value, setValue] = useState(book.title);

    const { editBookById } = useContext(BooksContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit()
        editBookById(book.id, value);
    };


    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input
                className="input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;

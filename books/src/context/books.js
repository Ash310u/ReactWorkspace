import axios from 'axios'
import { createContext, useState, useCallback } from 'react';

const BooksContext = createContext()

const Provider = ({ children }) => {
    const [books, setBooks] = useState([])

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }, [])

    const createBook = async (title) => {
        const res = await axios.post('http://localhost:3001/books', {
            title,
        })

        const updatedBooks = [
            ...books,
            res.data
        ]
        setBooks(updatedBooks);
    }

    const editBookById = async (id, newTitle) => {
        const res = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...res.data }
            }
            return book
        })
        setBooks(updatedBooks);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })
        setBooks(updatedBooks);
    }

    const sharedValue = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }
    return (
        <BooksContext.Provider value={sharedValue} >
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;
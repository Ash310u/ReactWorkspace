import { useState } from "react";

const SearchBar = ({ Submit }) => {
    const [ initialValue, setInitialValue ] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        Submit(initialValue)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit} >
                <input 
                    type="text" 
                    onChange={e => setInitialValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchBar
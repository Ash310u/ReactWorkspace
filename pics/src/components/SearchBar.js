import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [intialValue, setIntialValue] = useState('')
    return (
        <div>
            <input 
                type="text"
                value={intialValue}
                onChange={e => setIntialValue(e.target.value)}
            />
            <button onClick={onSubmit(intialValue)}>Search</button>
        </div>
    )
}

export default SearchBar
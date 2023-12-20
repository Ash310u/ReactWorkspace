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
                    // Reason behind using value: We are truly doing here is stealing control of the value of the input from the browser 
                    // and we are putting the value of the input under the control of the state system.
                    value={initialValue}
                    onChange={e => setInitialValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchBar
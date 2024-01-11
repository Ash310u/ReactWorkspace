import { useState } from "react"

const Dropdown = ({ options, onChange, value }) => {
    const [dropOn, setDropOn] = useState(false)

    const handleClick = () => {
        // A functional update
        setDropOn((currentValue) => !currentValue)
    }

    const renderedOptions = options.map((option) => {
        return <div key={option.value} onClick={() => {
            onChange(option)
            setDropOn(false)
        }}>{option.label}</div>
    })

    return (
        <div>
            Dropdown
            <div onClick={handleClick}>
                {/* Existence check helper */}
                {value?.label || 'Select'}
            </div>
            {dropOn && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown
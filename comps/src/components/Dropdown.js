import { useState } from "react"

const Dropdown = ({ options, onSelect, item }) => {
    const [dropOn, setDropOn] = useState(false)

    const handleClick = () => {
        // A functional update
        setDropOn((currentValue) => !currentValue)
    }

    const renderedOptions = options.map((option) => {
        return <div key={option.value} onClick={() => {
            onSelect(option)
            setDropOn(false)
        }}>{option.label}</div>
    })

    return (
        <div>
            Dropdown
            <div onClick={handleClick}>
                {/* Existence check helper */}
                {item?.label || 'Select'}
            </div>
            {dropOn && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown
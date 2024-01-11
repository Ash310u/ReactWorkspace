import { useState } from "react"
import { GoChevronDown, GoChevronUp } from "react-icons/go"

const Dropdown = ({ options, onChange, value }) => {
    const [dropOn, setDropOn] = useState(false)

    const handleClick = () => {
        // A functional update
        setDropOn((currentValue) => !currentValue)
    }

    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 cursor-pointer p-1 rounded' key={option.value} onClick={() => {
            onChange(option)
            setDropOn(false)
        }}>{option.label}</div>
    })

    return (
        <div className='w-48 relative'> 
            <div className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full' onClick={handleClick}>
                {/* Existence check helper */}
                {value?.label || 'Select...'}
                { dropOn ? <GoChevronUp className="text-lg"/> : <GoChevronDown className='text-lg' />}
            </div>
            {dropOn && <div className='absolute top-full border rounded p-3 shadow bg-white w-full'>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown
import { useEffect, useRef, useState } from "react"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import Panel from "./Panel"

const Dropdown = ({ options, onChange, value }) => {
    const [dropOn, setDropOn] = useState(false)

    const dropHead = useRef()

    useEffect(() => {
        const handler = (e) => {
            if (!dropHead.current) {
                return
            }
            if(!dropHead.current.contains(e.target)) {
                setDropOn(false) 
            }
        }

        document.addEventListener('click', handler, true)
        
        return () => {
            document.removeEventListener('click')
        }
    },[])

    const handleClick = () => {
        // A functional update
        setDropOn((currentValue) => !currentValue)
    }

    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 cursor-pointer p-1 rounded' key={option.value} onClick={() => {
            setDropOn(false)
            onChange(option)
        }}>{option.label}</div>
    })

    return (
        <div ref={dropHead} className='w-48 relative'>
            <Panel classNames='flex justify-between items-center cursor-pointer' onClick={handleClick}>
                {/* Existence check helper */}
                {value?.label || 'Select...'}
                {dropOn ? <GoChevronUp className="text-lg" /> : <GoChevronDown className='text-lg' />}
            </Panel>
            {dropOn && <Panel classNames='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown
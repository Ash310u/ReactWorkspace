import { useState } from "react"
import Button from "../components/Button"
import Panel from "../components/Panel";

const CounterPage = ({ intialCount }) => {
    const [count, setCount] = useState(intialCount);
    const [valueToAdd, setValueToAdd] = useState(0);
    
    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setValueToAdd(value)
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            handleChange();
        }
    })

    return (
        <Panel classNames="m-3">
            <h1 className="text-xl">Count is {count}</h1>
            <div className="flex flex-row pt-4 gap-2">
                <Button success rounded onClick={() => setCount(count + 1)}>Increment</Button>
                <Button secondary rounded onClick={() => setCount(count - 1)}>Decrement</Button>
            </div>

            <form className="flex flex-row items-center" onSubmit={(e) => {
                e.preventDefault()
                setCount(count + valueToAdd)
                setValueToAdd(0)
            }}>
                <label>Add a lot!</label>
                <input 
                    value={valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 rounded border border-gray-300"
                />
                <Button primary rounded >Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage
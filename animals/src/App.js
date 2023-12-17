import { useState } from "react"

const App = () => {
    const [count, setCount] =  useState(0)

    const handleCounter = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={handleCounter}>Click</button>
            <div>Number of animal: {count}</div>
        </div>
    )
}

export default App
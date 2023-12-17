import { useState } from "react"

const getRandomAnimal = () => {
    const animal = ['bird','cow','aligator','cat','dog','horse']

    return animal[Math.floor(Math.random() * animal.length)]
}

const App = () => {
    const [animals, setAnimals] =  useState([])

    const handleClick = () => {
        setAnimals([...animals, ...getRandomAnimal()])
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <div>{animals}</div>
        </div>
    )
}

export default App
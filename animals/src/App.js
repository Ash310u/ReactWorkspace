import './App.css'
import { useState } from "react"
import AnimalShow from "./AnimalShow"

const getRandomAnimal = () => {
    const animal = ['bird','cow','gator','cat','dog','horse']

    return animal[Math.floor(Math.random() * animal.length)]
}

const App = () => {
    const [animals, setAnimals] =  useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }
    
    const renderedAnimals = animals.map((animal, index  ) => {
        return <AnimalShow type={animal} key={index}/>
    })  

    return (
        <div className='app'>
            <button onClick={handleClick}>Click</button>
            <div>{renderedAnimals}</div>
        </div>
    )
}

export default App
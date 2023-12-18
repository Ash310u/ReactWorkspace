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
    })  // it return A new Array of components with those values of animals Array

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}

export default App
const App = () => {
    const handleMouseMove = () => {
        console.log('it works')
    }

    return (
        <div>
            Show animal list here!
            <button onMouseMove={handleMouseMove}>
                Click
            </button>
        </div>
    )
}

export default App
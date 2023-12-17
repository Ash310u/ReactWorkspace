const App = () => {
    const handleClick = () => {
        console.log('it works')
    }

    return (
        <div>
            Show animal list here!
            <button onClick={handleClick}>
                Click
            </button>
        </div>
    )
}

export default App
const App = () => {
    const btnClick = () => {
        console.log('hey rick')
    }

    return (
        <div>
            Show animal list here!
            <button onClick={btnClick}>
                check
            </button>
        </div>
    )
}

export default App
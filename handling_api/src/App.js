const App = () => {
    return (
        <div className="w-screen h-screen">
            <div className="w-1/2 h-1/2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-8" >
                <div className="w-full flex flex-row justify-between items-center">
                    Users
                    <button className="bg-gray-400 p-1">Add User</button>
                </div>
            </div>
        </div>
    );
}

export default App;
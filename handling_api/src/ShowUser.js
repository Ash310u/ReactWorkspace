const ShowUser = ({ children }) => {
    return (
        <div className="w-full flex flex-row bg-gray-700 text-white">
            {children}
            <button>Remove User</button>
        </div>
    )
}

export default ShowUser;
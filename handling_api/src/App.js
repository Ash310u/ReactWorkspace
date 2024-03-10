import ShowUser from "./ShowUser";

const App = () => {
  return (
    <div className="w-1/2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-8">
      <div className="w-full flex flex-row justify-between items-center">
        Users
        <button>Add User</button>
      </div>
      <div className="w-full flex flex-col justify-between items-center gap-2">
        <ShowUser>User1</ShowUser>
        <ShowUser>User2</ShowUser>
        <ShowUser>User3</ShowUser>
      </div>
    </div>
  );
}

export default App;
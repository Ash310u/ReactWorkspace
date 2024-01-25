import Form from "./components/Form"
import List from "./components/List"
import Search from "./components/Search"
import Value from "./components/Value"

const App = () => {
    return (
        <div className="container is-fluid">
            <Form/>
            <Search/>
            <List/>
            <Value/>
        </div>
    )
}
export default App
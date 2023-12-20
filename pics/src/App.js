import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from './api';

const App = () => {
    const handleSubmit = (term) => {
        console.log(term)
    }
    return (
        <div>
            <SearchBar Submit={handleSubmit} />
        </div>
    )
}

export default App
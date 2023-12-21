import SearchBar from "./components/SearchBar";
import searchImages from './api';

const App = () => {
    const handleSubmit = (term) => {
        searchImages(term)
    }
    return (
        <div>
            <SearchBar Submit={handleSubmit} />
        </div>
    )
}

export default App
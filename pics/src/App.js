import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from './api';

const App = () => {
    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        console.log(result)
    }
    return (
        <div>
            <SearchBar Submit={handleSubmit} />
            <ImageList />
        </div>
    )
}

export default App
import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from './api';

const App = () => {
    const [arrData, setArrData] = useState([])

    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        setArrData(result)
    }
    return (
        <div>
            <SearchBar Submit={handleSubmit} />
            <ImageList data={arrData} />
        </div>
    )
}

export default App
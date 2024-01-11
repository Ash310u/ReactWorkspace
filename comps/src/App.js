import { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    const handleSelect = (option) => {
        setSelectedItem(option)
    }
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' }
    ]
    return <Dropdown options={options} onChange={handleSelect} value={selectedItem} />
};

export default App;
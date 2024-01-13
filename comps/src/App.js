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
    return (
        <div className="flex">
             <Dropdown options={options} onChange={handleSelect} value={selectedItem} />
             <Dropdown options={options} onChange={handleSelect} value={selectedItem} />
        </div>
    )
};

export default App;
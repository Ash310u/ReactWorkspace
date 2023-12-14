// 1) Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
    return (
        <textarea
            autoFocus
            spellCheck 
            style={{
                fontFamily:'monospace',
                color:'green',
                background:'#424242'
            }}
        />
    )
}
// 5) Show the component on the screen
root.render(<App />);
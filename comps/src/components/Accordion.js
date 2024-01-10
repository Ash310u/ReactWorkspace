import { useState } from "react"

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(0)

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <div key={item.id}>
                <div>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
                <button onClick={() => {setExpandedIndex(index)}}>check</button>
            </div>
        )
    })

    return (
        <div>
            {renderedItems}
        </div>
    )
}

export  default Accordion;
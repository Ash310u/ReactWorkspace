import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const { config, data } = props

    const handleClick = (label) => {
        sortOrder === null ? setSortOrder('asc') : sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder(null);
        sortOrder === null ? setSortBy(label) : sortOrder === 'asc' ? setSortBy(label) : setSortBy(null);
    }
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th onClick={() => handleClick(column.label)}>{column.label} IS SORTABLE</th>
        };
    })

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column =>  column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            
            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            const order = typeof valueA === 'string' ?  valueA.localeCompare(valueB) * reverseOrder : (valueA - valueB) * reverseOrder
            return order
        })
    }

    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} config={updatedConfig} data={sortedData}/>
    </div>
}

export default SortableTable;

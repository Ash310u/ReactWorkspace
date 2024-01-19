import { useState } from "react";

const useSort = (config, data) => {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    let sortedData = data;

    const setSortColumn  = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }
        sortOrder === null ? setSortOrder('asc') : sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder(null);
        sortOrder === null ? setSortBy(label) : sortOrder === 'asc' ? setSortBy(label) : setSortBy(null);
    }

    // Sorting system
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            return typeof valueA === 'string' ? valueA.localeCompare(valueB) * reverseOrder : (valueA - valueB) * reverseOrder
        })
    }

    return { 
        sortedData,
        setSortColumn,
        sortOrder,
        sortBy
    }
}

export default useSort
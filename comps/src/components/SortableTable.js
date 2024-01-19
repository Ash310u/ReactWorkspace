import { useState } from "react";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Table from "./Table";

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const { config, data } = props

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }
        sortOrder === null ? setSortOrder('asc') : sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder(null);
        sortOrder === null ? setSortBy(label) : sortOrder === 'asc' ? setSortBy(label) : setSortBy(null);
    }
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-50" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center gap-2 p-2">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        };
    })

    let sortedData = data;

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

    return <Table {...props} config={updatedConfig} data={sortedData} />
}

const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <div>
            <BsCaretUpFill />
            <BsCaretDownFill />
        </div>
    }
    return sortOrder === null ? <div><BsCaretUpFill /><BsCaretDownFill /></div> : sortOrder === 'asc' ? <div><BsCaretUpFill /></div> : <div><BsCaretDownFill /></div>
}

export default SortableTable;

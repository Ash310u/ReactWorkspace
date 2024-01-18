import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const { config } = props

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

    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} config={updatedConfig} />
    </div>
}

export default SortableTable;

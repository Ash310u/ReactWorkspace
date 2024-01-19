import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import Table from "./Table";
import useSort from "../hooks/useSort";

const SortableTable = (props) => {    
    const { config, data } = props

    // useSort is custom hook
    const { sortedData, setSortColumn, sortOrder, sortBy } = useSort(config, data)

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-50" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center gap-2 p-2">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        };
    })

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

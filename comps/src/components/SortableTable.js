import Table from "./Table";

const SortableTable = (props) => {
    const { config } = props

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
         }

         return {
            ...column,
            header: () => <th>{column.label} IS SORTABLE</th>
         };
    })

    return <Table {...props} config={updatedConfig} />
}

export default SortableTable;

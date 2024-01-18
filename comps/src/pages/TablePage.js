// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
    const data = [
        { name: 'Mango', color: 'bg-yellow-400', score: 5 },
        { name: 'Orange', color: 'bg-orange-400', score: 3 },
        { name: 'Apple', color: 'bg-red-600', score: 4 },
        { name: 'Lime', color: 'bg-green-600', score: 2 },
    ]

    // Columns
    const config = [
        {
            label: 'Name',
            render: (rowData) => rowData.name,
            sortValue: (rowData) => rowData.name
        },
        {
            label: 'Color',
            render: (rowData) => <div className={`p-3 m-2 ${rowData.color}`}></div>
        },
        {
            label: 'Score',
            render: (rowData) => rowData.score,
            sortValue: (rowData) => rowData.score
        }
    ]

    const keyFn = (x) => {
        return x.name
    }

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage
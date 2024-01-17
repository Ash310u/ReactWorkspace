import Table from "../components/Table";

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
            render: (rowData) => rowData.name
        },
        {
            label: 'Color',
            render: (rowData) => <div className={`p-3 m-2 ${rowData.color}`}></div>
        },
        {
            label: 'Score',
            render: (rowData) => rowData.score,
            header:() => <th className='bg-red-500'>Score</th>
        }
    ]

    const keyFn = (x) => {
        return x.name
    }

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage
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
            render: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score
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
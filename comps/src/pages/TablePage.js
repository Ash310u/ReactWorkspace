import Table from "../components/Table";

const TablePage = () => {
    const data = [
        { name: 'Mango', color: 'bg-yellow-400', score: 5 },
        { name: 'Orange', color: 'bg-orange-400', score: 3 },
        { name: 'Apple', color: 'bg-red-600', score: 4 },
        { name: 'Lime', color: 'bg-green-600', score: 2 },
    ]

    return (
        <div>
            <Table data={data} />
        </div>
    )
}

export default TablePage
import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
    const data = [
        { fruit: 'Mango', color: 'bg-yellow-400', price: 5890 },
        { fruit: 'Orange', color: 'bg-orange-400', price: 3999 },
        { fruit: 'Apple', color: 'bg-red-600', price: 4900 },
        { fruit: 'Lime', color: 'bg-green-600', price: 2990 },
    ]

    // Columns
    const config = [
        {
            label: 'Fruit',
            render: (rowData) => rowData.fruit,
            sortValue: (rowData) => rowData.fruit
        },
        {
            label: 'Color',
            render: (rowData) => <div className={`p-3 m-2 ${rowData.color}`}></div>
        },
        {
            label: 'Price',
            render: (rowData) => rowData.price,
        },
        {
            label: 'Dis Price',
            render: (rowData) => Math.round(rowData.price - (rowData.price/100) * 10) ,
            sortValue: (rowData) => rowData.price
        }
    ]

    const keyFn = (x) => {
        return x.fruit
    }

    return (
        <div className="flex gap-40">
            <Table data={data} config={config} keyFn={keyFn} />
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage
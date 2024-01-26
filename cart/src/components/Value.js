import { useSelector } from "react-redux"

const Value = () => {
    const totalCost = useSelector(({ list : { searchTerm , data}}) => {
        return data.filter((obj) =>
            obj.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).reduce((acc, curr) => acc + curr.cost, 0);
    })
    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
}
export default Value
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../store";
const List = () => {
    const dispatch = useDispatch()
    const { filteredData, name } = useSelector(({ form, list: { searchTerm, data } }) => {
        const filteredData = data.filter((obj) => 
            // If the searchTerm is an empty('') string(which actually it is at first), the `includes` function will return `true` for any string in the array since an empty string is present in every string.
            // The `filter` function, in this case, will return a new array containing all elements of the original array.
            obj.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return {
            filteredData,
            name: form.name
        }
    })

    const renderedList = filteredData.map((obj) => {

        const bold = name && obj.name.toLowerCase().includes(name.toLowerCase())
        

        return (
            <div key={obj.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {obj.name} - ${obj.cost}
                </p>
                <button
                    onClick={() => dispatch(removeData(obj.id))}
                    className="button is-danger"
                >
                    Delete
                </button>
            </div>
        )
    })
    return (
        <div className="car-list">
            {renderedList}
            <hr />
        </div>
    )
}
export default List
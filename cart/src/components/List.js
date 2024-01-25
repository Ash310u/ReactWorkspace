import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../store";
const List = () => {
    const dispatch = useDispatch()
    const listData = useSelector((state) => {
        return state.list.data
    })

    const renderedList = listData.map((obj) => {
        return (
            <div key={obj.id} className="panel">
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
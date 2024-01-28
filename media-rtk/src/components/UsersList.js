import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../store';

const UsersList = () => {
    const dispatch = useDispatch()

    const { isLoading, data, error } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const renderedState = isLoading ? <div>Loading...</div> : error != null ? <div>Error fetching data...</div> : data.map(user => <div key={user.id}>{user.name}</div>)

    return (
        <div>
            {renderedState}
        </div>
    )
}
export default UsersList
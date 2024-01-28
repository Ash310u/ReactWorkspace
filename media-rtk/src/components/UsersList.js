import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { fetchUsers } from '../store';

const UsersList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    },[])

    return (
        <div>
            UserLst
        </div>
    )
}
export default UsersList
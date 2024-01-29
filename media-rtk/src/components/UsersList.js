import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button'

const UsersList = () => {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    const [loadingUsersError, setLoadingUsersError] = useState(null)

    const dispatch = useDispatch()
    const { data } = useSelector((state) => {
        return state.users
    })

    useEffect(() => {
        setIsLoadingUsers(true)

        dispatch(fetchUsers())
            .unwrap() // The "unwrap()" method is used to access the resolved or rejected value of a dispatched asynchronous action ( Basically unwrap() give a brand new promise back )
            .catch((error) => setLoadingUsersError(error))
            .finally(() => setIsLoadingUsers(false))

    }, [dispatch])

    const handleUserAdd = () => {
        dispatch(addUser());
    }

    if (isLoadingUsers) {
        return <Skeleton times={6} className="h-10 w-full" />
    }
    if (loadingUsersError) {
        return <div>{loadingUsersError.message}</div>;
    }
    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className='mb-2 border rounded '>
                <div className='flex p-2 justify-between items-center cursor-pointer'>
                    {user.name}
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='flex flex-row justify-between m-3'>
                <h1 className='m-2 text-xl'>Users</h1>
                <Button success rounded onClick={handleUserAdd}>
                    + Add User
                </Button>
            </div>
            {renderedUsers}
        </div>
    )
}
export default UsersList
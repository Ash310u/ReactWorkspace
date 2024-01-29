import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button'
import useThunk from '../hooks/useThunk';

const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [doCreateUsers, isCreatingUsers, creatingUserError] = useThunk(addUser)

    const { data } = useSelector((state) => {
        return state.users
    })

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    const handleUserAdd = () => {
        doCreateUsers()
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
                {
                    isCreatingUsers
                        ? 'Creating User...'
                        : <Button success rounded onClick={handleUserAdd}>+ Add User</Button>
                }
                {creatingUserError && 'Error Create User...'}
            </div>
            {renderedUsers}
        </div>
    )
}
export default UsersList
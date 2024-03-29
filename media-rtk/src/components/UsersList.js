import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button'
import useThunk from '../hooks/useThunk';
import UserListItem from './UserListItem';

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

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />
    } else if (loadingUsersError) {
        content = <div>{loadingUsersError.message}</div>;
    } else {
        content = data.map((user) => {
            return <UserListItem key={user.id} user={user}/>
        })
    }

    return (
        <div>
            <div className='flex flex-row justify-between m-3 items-center'>
                <h1 className='m-2 text-xl'>Users</h1>
                <Button loading={isCreatingUsers} secondary onClick={handleUserAdd}>+ Add User</Button>
                {creatingUserError && 'Error Create User...'}
            </div>
            {content}
        </div>
    )
}
export default UsersList
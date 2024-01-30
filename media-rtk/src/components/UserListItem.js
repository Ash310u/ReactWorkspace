import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';
import useThunk from '../hooks/useThunk';
import Button from './Button'


const UserListItem = ({ user }) => {
    const [doDeleteUsers, isLoading, error] = useThunk(removeUser)

    return (
        <div className='mb-2 border flex flex-row justify-between items-center px-2 rounded-sm cursor-pointer'>
            <div className='flex p-2 justify-between items-center cursor-pointer'>
                {user.name}
            </div>
            <div className='flex flex-row items-center justify-center'>
                <Button loading={isLoading} danger className='rounded-sm' onClick={() => doDeleteUsers(user)}><GoTrashcan /></Button>
                {error && 'Error Delete User...'}
            </div>
        </div>
    )
}

export default UserListItem;
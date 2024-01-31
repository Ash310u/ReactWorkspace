import { GoTrashcan } from 'react-icons/go';
import { removeUser } from '../store';
import useThunk from '../hooks/useThunk';
import Button from './Button'
import ExpandablePanel from './ExpandablePanel';
import AlbumList from './AlbumsList';


const UserListItem = ({ user }) => {
    const [doDeleteUsers, isLoading, error] = useThunk(removeUser)

    const header = <>
        <Button loading={isLoading} danger className='rounded-sm mr-2' onClick={() => doDeleteUsers(user)}><GoTrashcan /></Button>
        {error && 'Error Delete User...'}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumList user={user} />
        </ExpandablePanel>

    )
}

export default UserListItem;
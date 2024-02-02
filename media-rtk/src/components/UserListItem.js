import { MdDelete } from 'react-icons/md';
import { removeUser } from '../store';
import useThunk from '../hooks/useThunk';
import Button from './Button'
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';


const UserListItem = ({ user }) => {
    const [doDeleteUsers, isLoading, error] = useThunk(removeUser)

    const header = <>
        <Button loading={isLoading} danger className='rounded-sm mr-2' onClick={() => doDeleteUsers(user)}><MdDelete /></Button>
        {error && 'Error Delete User...'}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>

    )
}

export default UserListItem;
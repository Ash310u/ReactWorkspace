import { GoTrashcan } from "react-icons/go";
import Button from './Button'
import ExpandablePanel from './ExpandablePanel';
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

const AlbumListItem = ({ album }) => {
    const [ removeAlbum, results ]= useRemoveAlbumMutation();

    const handleDeleteAlbum = ()  => {
        removeAlbum(album)
    }
    const header = <>
        <Button loading={results.isLoading} danger className='rounded-sm mr-2' onClick={handleDeleteAlbum}><GoTrashcan /></Button>
        {album.title}
    </>
    return (
        <ExpandablePanel header={header}>
            <PhotosList album={album}/>
        </ExpandablePanel>
    )
}

export default AlbumListItem;
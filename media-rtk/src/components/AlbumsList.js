import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const AlbumList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [ addAlbum ] = useAddAlbumMutation();

    const handleAddAlbum = ()  => {
        addAlbum(user)
    }

    let content;
    if (isLoading) {
        content = <Skeleton times={3} className="h-10 w-full" />
    } else if (error) {
        content = <div>Error loading Albums...</div>
    } else {
        content = data.map(album => {
            const header = <div>{album.title}</div>
            return <ExpandablePanel key={album.id} header={header}>
                List of Photos in the album
            </ExpandablePanel>
        })
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center p-2">
                Albums for {user.name}
                <Button onClick={handleAddAlbum} secondary rounded>+ Add</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumList;
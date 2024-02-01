import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const AlbumList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [ addAlbum, results ] = useAddAlbumMutation();

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
            <div className="flex flex-row justify-between items-center m-2">
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <Button loading={results.isLoading } onClick={handleAddAlbum} primary>+ Add</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumList;
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

const AlbumsList = ({ user }) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [ addAlbum, results ] = useAddAlbumMutation();

    const handleAddAlbum = ()  => {
        addAlbum(user)
    }

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full" />
    } else if (error) {
        content = <div>Error loading Albums...</div>
    } else {
        content = data.map(album => {
            return <AlbumListItem key={album.id} album={album}/>
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

export default AlbumsList;
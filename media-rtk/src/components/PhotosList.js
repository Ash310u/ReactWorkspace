import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store"

const PhotosList = ({ album }) => {
    const { data, error, isFetching} = useFetchPhotosQuery(album)
    const [ addPhoto, results ] = useAddPhotoMutation()

    const handleAddAlbum = ()  => {
        addPhoto(album)
    }

    let content;
    if (isFetching) {
        content = <Skeleton times={4} className="h-8 w-8" />
    } else if (error) {
        content = <div>Error loading Photos ...</div>
    } else {
        content = data.map(photo => {
            return <PhotoListItem key={photo.id} photo={photo}/>
        })
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-2">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum} secondary>+ Add</Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap">
                {content}
            </div>
        </div>
    )
}

export default PhotosList;
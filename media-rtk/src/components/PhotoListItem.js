import { MdDelete } from "react-icons/md";
import { useRemovePhotoMutation } from "../store";

const PhotoListItem = ({ photo }) => {
    const [ removePhoto ] = useRemovePhotoMutation()
    const handleDeletePhoto = ()  => {
        removePhoto(photo)
    }

    return (
        <div className="relative cursor-pointer m-2" onClick={handleDeletePhoto}>
            <img src={photo.url} alt="" className="h-20 w-20 rounded-md"/>
            <div className="absolute inset-0 flex items-center justify-center rounded-md hover:bg-gray-200 opacity-0 hover:opacity-80 "><MdDelete className='text-3xl'/></div>
        </div>
    )
}

export default PhotoListItem;
import ImageShow from "./ImageShow"

const ImageList = ({ data }) => {
    const renderedLinks = data.map(( link ) => {
        return <ImageShow src={link.urls.raw} key={link.id} alt={link.alt_description} />
    })

    return (
        <div>
            {renderedLinks}
        </div>
    )
}

export default ImageList
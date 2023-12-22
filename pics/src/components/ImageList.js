import ImageShow from "./ImageShow"

const ImageList = ({data}) => {
    const renderedLinks= data.map(( link, index  ) => {
        return <ImageShow src={link.urls.raw} key={index}/>
    })

    return (
        <div>
            {renderedLinks}
        </div>
    )
}

export default ImageList

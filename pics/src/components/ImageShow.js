const ImageShow = ({ src, alt }) => {
    return (
        <div>
            <img src={src} alt={alt} style={{ width: '200px' }} />
        </div>
    )
}

export default ImageShow
const ImageShow = ({ src }) => {
    return (
        <div>
            <img src={src} alt='img' style={{ width: '200px' }} />
        </div>
    )
}

export default ImageShow
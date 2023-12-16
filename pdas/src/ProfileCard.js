const ProfileCard = ({title, handle, img, description}) => {
    console.log(title, handle, description)
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is- 1by1">
                    <img src ={img} alt='pda logo'/>
                </figure>
            </div>

            <div className='card-content'>
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    )
}

export default ProfileCard
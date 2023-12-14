const ProfileCard = ({title, handle, img}) => {
    console.log(title, handle)
    return (
        <div>
            <div>
                <img src={img}/>
            </div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard
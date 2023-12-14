const ProfileCard = ({title, handle}) => {
    console.log(title, handle)
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard
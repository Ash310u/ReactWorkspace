const ProfileCard = ({title, handle, img}) => {
    console.log(title, handle)
    return (
        <div>
            <div>
                <img src ={img} alt='pda logo'/>
            </div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard
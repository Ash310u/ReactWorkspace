import ProfileCard from './ProfileCard'

const App = () => {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard name='Alexa'/>
            <ProfileCard name='Cortana'/>
            <ProfileCard name='Siri'/>
        </div>
    )
}

export default App
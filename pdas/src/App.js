import ProfileCard from './ProfileCard'
import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'

const App = () => {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                        Personal Digital Assistants
                    </p>
                </div>
            </section>

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title='Alexa'  handle='@alexa99' img={AlexaImg} />
                        </div>

                        <div className='column is-4'>
                            <ProfileCard title='Cortana' handle='@cortana32' img={CortanaImg}/>          
                        </div>
                        
                        <div className='column is-4'>
                            <ProfileCard title='Siri' handle='@siri01' img={SiriImg}/>          
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
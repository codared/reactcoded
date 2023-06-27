import 'bulma/css/bulma.css';
import ProfileCard from './Profilecard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant </p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className='column is-4'>
             <ProfileCard 
             title="alexa" 
             handle="@alexa99"  
             image={AlexaImage} 
             description="Alexa was made by Amazon. It is used to buy and control things."/>
            </div>
            <div className='column is-4'>
             <ProfileCard 
             title="cortana" 
             handle="@cortana32"  
             image={CortanaImage}
             description="Cortana was made by Microsoft, do you know what it does?"/>
            </div>
            <div className='column is-4'>
              <ProfileCard 
              title="siri" 
              handle="@siri01"  
              image={SiriImage}
              description="Siri was made by Apple and is the ios assistant!"/>
            </div> 
          </div>
        </section>
        </div>
       </div> 
  )
};

export default App;
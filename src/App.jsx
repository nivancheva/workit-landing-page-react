import './App.css'
import lightLogo from './images/logo-light.svg';
import darkLogo from './images/logo-dark.svg';
import imgFounder from './images/image-founder.webp';
import iconFacebook from './images/icon-facebook.svg';
import iconInsta from './images/icon-instagram.svg';
import iconTwitter from './images/icon-twitter.svg';
import imageHero from './images/image-hero.webp';

function App() {
  return (
    <>
      <header className='header'>
        <nav className='container flex-container'>
          <img src={lightLogo}/>
          <button className='button button-secondary'>Apply for acces</button>
        </nav>
      </header>

      <main>
        <div className='hero'>
          <div className='container'>
            <h1 className='hero-header'>Data <span className='underline'>tailored</span> to your needs.</h1>
            <button className='button button-primary'>Learn More</button>
          </div>
            <img className='image-hero' src={imageHero}/>
        </div>
        <div className='features'>
          <div className='container grid-container'>
            <div className='grid-gap'>
              <p className='circle'>1</p>
              <div>
                <h3>Actionable insights</h3>
                <p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
              </div>
            </div>
            <div className='grid-gap'>
              <p className='circle'>2</p>
              <div>
                <h3>Data-driven decisions</h3>
                <p>Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
              </div>
            </div>
            <div className='grid-gap'>
              <p className='circle'>3</p>
              <div>
                <h3>Always affordable</h3>
                <p>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='application'>
          <div className='container'>
            <img className='imagefounder' src={imgFounder}/>
            <div className='application-founder grid-gap'>
              <h2>Be the first to test</h2>
              <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
              <button className='button button-primary'>Apply for access</button>
            </div>
          </div>
        </div>
      </main>

      <footer className='footer'>
        <div className='container'>
          <img className='darkLogo' src={darkLogo}/>
          <div className='icons flex-container'>
            <a><img src={iconFacebook}/></a>
            <a><img src={iconTwitter}/></a>
            <a><img src={iconInsta}/></a>           
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

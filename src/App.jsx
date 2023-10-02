import './App.css'
import lightLogo from './images/logo-light.svg';
import darkLogo from './images/logo-dark.svg';
import imgFounder from './images/image-founder.webp';
import iconFacebook from './images/icon-facebook.svg';
import iconInsta from './images/icon-instagram.svg';
import iconTwitter from './images/icon-twitter.svg';

function App() {
  return (
    <>
      <header>
        <nav className='container'>
          <img src={lightLogo}/>
          <button className='button button-secondary'>Apply for acces</button>
        </nav>
      </header>

      <main>
        <div className='hero'>
          <h1>Data <span className='underline'>tailored</span> to your needs.</h1>
          <button className='button button-primary'>Learn More</button>
        </div>
        <div className='content'>
          <div className='grid-container'>
            <div>
              <p className='circle'>1</p>
              <h3>Actionable insights</h3>
              <p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
            </div>
            <div>
              <p className='circle'>2</p>
              <h3>Data-driven decisions</h3>
              <p>Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
            </div>
            <div>
              <p className='circle'>3</p>
              <h3>Always affordable</h3>
              <p>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
            </div>
          </div>

          <div className='founder'>
            <img src={imgFounder}/>
            <div>
              <h2>Be the first to test</h2>
              <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
              <button className='button button-primary'>Apply for access</button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <img src={darkLogo}/>
        <div>
          <a><img src={iconFacebook}/></a>
          <a><img src={iconInsta}/></a>
          <a><img src={iconTwitter}/></a>
        </div>
      </footer>
    </>
  )
}

export default App

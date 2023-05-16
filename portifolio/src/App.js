import './css/App.css';
import './css/Global.css'
import './css/Biography.css'

import Me from './media/Me.jpg';

import Header from "./components/Header"
import Section from './components/Section';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Section id="Biography">
          <div className='flex'>
            <img className='me-image' alt='Me' src={Me} />
            <div>
              Hello, thank you for being here, allow me to introduce myself. I'm Heitor Silva, I'm a Web Developer, but I surely love to wander around in the world of programming. I started studying coding back when I was around 12 years, thanks to my dad, who always incentivated this. Throught my time studying, i've stranded around several areas of programming, searching for the one I enjoy the most, and even though I haven't decided yet what I will do for life inside programming (nor intend to do so), Web Development certainly will always have a place in my heart. I hope I can help with your needs, and thanks again for spending your time with me!
            </div>
          </div>
        </Section>
        <Section id="Skills">Skills</Section>
        <Section id="Experience">Experience</Section>
        <Section id="Projects">Projects</Section>
        <Section id="Quotes">Quotes</Section>
      </Main>
    </>
  );
}

export default App;

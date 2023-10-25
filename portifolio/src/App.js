import './css/App.css';
import './css/Global.css';
import './css/Biography.css';

import Section from './components/Section';
import StartPage from './components/StartPage';
import { useEffect } from 'react';

function App() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry);
        entry.target.classList.add(entry.target.dataset.animation);
      }
    });
  });
  
  useEffect(() => {
    console.log(document.querySelectorAll('.animate__animated'));
    document.querySelectorAll('.animate__animated').forEach(element => {
      observer.observe(element);
    });
  })

  return (
    <>
      <Section id="Start">
        <StartPage />
      </Section>
      <Section id="Biography">

      </Section>
      <Section id="Skills">

      </Section>
      <Section id="Experience">

      </Section>
      <Section id="Projects">

      </Section>
      <Section id="Quotes">
                <div data-animation="animate__slideInLeft" className="animate__animated animate__faster">
                    Heitor Silva
                </div>
      </Section>
    </>
  );
}

export default App;

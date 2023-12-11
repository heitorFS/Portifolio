import React from "react";
import '../css/App.css';

import Section from '../components/Section';
import StartPage from '../components/StartPage';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';

const Main = () => {
    const [carIndex, setCarIndex] = useState(1);
  
    const onCarouselChange = (e) => {
      setCarIndex(prevCarIndex => prevCarIndex += 1);
      
      var carousel = document.querySelector('.carousel');
      carousel.style.left = `calc(calc(-25vw - 60px) * ${carIndex % carousel.children.length})`;
    }
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.animation);
        }
      });
    });
    
    useEffect(() => {
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
        <Section id="Projects" secDesc={'A showcase of my favourite and most important projects'} fade onCarouselChange={onCarouselChange}>
          <Carousel>
            <ProjectCard title='MoveStats' description='description still to be done' awards={['FEBRACE (Brazilian Science and Engineering Fair) 2021 Finalist']} />
            <ProjectCard title='Planner' description='description still to be done' />
            <ProjectCard title='Chat' description='description still to be done' />
            <ProjectCard title='Solar system monitoring' description='description still to be done' />
            <ProjectCard title='Audire' description='description still to be done' />
          </Carousel>
        </Section>
        <Section id="Quotes">
          <div data-animation="animate__slideInLeft" className="animate__animated animate__faster">
              Heitor Silva
          </div>
        </Section>
      </>
    );
};

export default Main;
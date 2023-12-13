import React from "react";
import '../css/App.css';

import Section from '../components/Section';
import StartPage from '../components/StartPage';
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';
import Skill from "../components/Skill";

const Main = () => {
    const [carIndex, setCarIndex] = useState({
      skillsCarousel: 1,
      projectsCarousel: 1
    });
  
    const onCarouselChange = (e) => {      
      const carousel = document.getElementById(e.currentTarget.dataset.carousel);
      const style = getComputedStyle(carousel.children[0]);

      var updateValue = {};
      updateValue[e.currentTarget.dataset.carousel] = carIndex[e.currentTarget.dataset.carousel] + 1;
      setCarIndex(prevCarIndex => ({
        ...prevCarIndex,
        ...updateValue
      }));

      carousel.style.left = `-${(parseInt(style.marginRight.replace('px', '')) + carousel.children[0].offsetWidth) * (carIndex[e.currentTarget.dataset.carousel] % carousel.children.length)}px`;
    }
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('skill-container'))  
            if (entry.target.classList[1] !== 'loaded') {
              (function loop(i) {
                setTimeout(function () {
                  entry.target.style.background = `conic-gradient(transparent ${i}%, #141414 ${i}%), linear-gradient(135deg, rgba(119,30,131,1) 0%, rgba(17,157,169,1) 100%)`;
                  if (++i < entry.target.dataset.fill)
                    loop(i);
                }, 10);
              })(0);
              entry.target.classList.add('loaded');
            }
            
          else            
            entry.target.classList.add(entry.target.dataset.animation);
        }
      });
    });
    
    useEffect(() => {
      document.querySelectorAll('.skill-container').forEach(skill => {
        observer.observe(skill);
      });

      document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
      });

      // eslint-disable-next-line
    }, [])
  
    return (
      <>
        <Section id="Start">
          <StartPage />
        </Section>
        <Section id="Biography">
  
        </Section>
        <Section id="Skills" carouselId='skillsCarousel' secDesc={'Overview of my skills and years practising them.'} fade onCarouselChange={onCarouselChange}>
          <Carousel id='skillsCarousel'>
            <Skill id='React' percentage={90} />
            <Skill id='JS' percentage={85} />
            <Skill id='CSS' percentage={85} />
            <Skill id='HTML' percentage={85} />
            <Skill id='C#' percentage={70} />
            <Skill id='C++' percentage={50} />
          </Carousel>
        </Section>
        <Section id="Experience">
  
        </Section>
        <Section id="Projects" more carouselId='projectsCarousel' secDesc={'A showcase of my favourite and most important projects'} fade onCarouselChange={onCarouselChange}>
          <Carousel id='projectsCarousel'>
            <ProjectCard title='MoveStats' description='description still to be done' awards={['FEBRACE (Brazilian Science and Engineering Fair) 2021 Finalist', 'FEMIC (Scientific Initiation Fair of Minas) Participant']} />
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
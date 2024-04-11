import React from "react";
import '../css/App.css';

import Section from '../components/Section';
import StartPage from '../components/StartPage';
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';
import Skill from "../components/Skill";
import Experience from "../components/Experience";

const Main = () => {  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('skill'))  
            if (entry.target.classList[1] !== 'loaded') {
              (function loop(i) {
                setTimeout(function () {
                  entry.target.style.background = `conic-gradient(transparent ${i}%, #141414 ${i}%), linear-gradient(135deg, rgb(195, 40, 216) 0%, rgb(20, 204, 221) 100%)`;
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
      document.querySelectorAll('.skill').forEach(skill => {
        observer.observe(skill);
      });

      document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
      });

      // eslint-disable-next-line
    }, [])
  
    return (
      <>
        <div id="Start">
          <StartPage />
        </div>
        <Section id="Biography">
  
        </Section>
        <Section id="Skills" secDesc={'Overview of my skills and years practising them.'} fade>
          <Carousel id='skillsCarousel' noLeftArrow insideArrow infinite>
            <Skill id='React' percentage={90} workingSince={new Date(2023, 0, 10)} projectCount={120} />
            <Skill id='JS' percentage={85} workingSince={new Date(2021, 8, 10)} projectCount={120} />
            <Skill id='CSS' percentage={85} workingSince={new Date(2021, 8, 10)} projectCount={120} />
            <Skill id='HTML' percentage={85} workingSince={new Date(2021, 8, 10)} projectCount={120} />
            <Skill id='C#' percentage={70} workingSince={new Date(2021, 8, 10)} projectCount={120} />
            <Skill id='C++' percentage={50} workingSince={new Date(2021, 8, 10)} projectCount={120} />
          </Carousel>
        </Section>
        <Section id="Experience" cardGrid>
          <Experience name="Synergroup" picture="sng" startDate="17/05/2021" endDate="25/02/2022" role="Web developer" skills={['C#', 'HTML', 'JS', 'CSS']} />
          <Experience name="Automalógica" picture="automalogica" />
          <Experience name="Workverse" picture="workverse" />
          <Experience name="AEnSolar" picture="AEnSolar" />
        </Section>
        <Section id="Projects" more secDesc={'A showcase of my favourite and most important projects'} fade >
          <Carousel id='projectsCarousel' noLeftArrow insideArrow infinite>
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
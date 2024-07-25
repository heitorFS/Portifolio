import React from "react";
import '../css/App.css';

import Section from '../components/Section';
import StartPage from '../components/StartPage';
import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import { useTranslation } from "react-i18next";

const Main = () => {  
  const { i18n } = useTranslation();
  const { t } = useTranslation();
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

  const _changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const switchLanguages = () => {
    let menu = document.querySelector('.language-dropdown');
    if (menu.style.maxHeight === '0px' || !menu.style.maxHeight) {
      setTimeout(() => {menu.style.maxHeight = '500px'}, 1);
    }
    else {
      setTimeout(() => {menu.style.maxHeight = '0px'}, 1);
    }
  };

  return (
    <>
      <div className="change-language">
        <div className="language-open" onClick={switchLanguages}>
          {t('Language')} <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="language-dropdown">
          <div className="language-option" onClick={() => {_changeLanguage('pt')}}>
            <img className={`language-button ${typeof i18n !== 'undefined' ? i18n.language === 'pt' || !i18n.language ? 'language-selected' : '' : ''}`} src={require('../media/flags/brazil.png')} alt="PT-BR" /> <div>{t('Portuguese')}</div>
          </div>
          <div className="language-option" onClick={() => {_changeLanguage('en')}}>
            <img className={`language-button ${typeof i18n !== 'undefined' ? i18n.language === 'en' ? 'language-selected' : '' : ''}`} src={require('../media/flags/united-kingdom.png')} alt="EN-UK" /> <div>{t('English')}</div>
          </div>
        </div>
      </div>
      <div id="Start">
        <StartPage />
      </div>
      <Section id="Biography">
        {t('BiographyText')}
      </Section>
      <Section id="Skills" secDesc={t('SkillsText')} fade>
        <Carousel id='skillsCarousel' noLeftArrow insideArrow infinite>
          <Skill id='React' percentage={90} years={2} />
          <Skill id='JS' percentage={85} years={3} />
          <Skill id='CSS' percentage={85} years={3} />
          <Skill id='HTML' percentage={85} years={3} />
          <Skill id='C#' percentage={70} years={2} />
          <Skill id='C++' percentage={50} years={1} />
          <Skill id='SQL' percentage={50} years={1} />
        </Carousel>
      </Section>
      <Section id="Experience" cardGrid>
        <Experience name="Synergroup" picture="sng" startDate="03/2021" endDate="02/2022" role="Web developer" skills={['C#', 'HTML', 'JS', 'CSS']} />
        <Experience name="Automalógica" picture="automalogica" startDate="02/2022" endDate="12/2022" role="SCADA developer" skills={['Visual Basic', 'Python', 'Elipse E3']} />
        <Experience name="Workverse" picture="workverse" startDate="02/2023" endDate="08/2023" role="Front-end developer" skills={['React', 'HTML', 'JS', 'CSS']} />
        <Experience name="AEnSolar" picture="AEnSolar" startDate="10/2023" endDate="-" role="Software developer" skills={['C#', 'C++', 'HTML', 'JS', 'CSS']} />
      </Section>
      <Section id="Projects" more secDesc={t('ProjectsText')} fade >
        <Carousel id='projectsCarousel' noLeftArrow insideArrow infinite>
          <ProjectCard title={t('MoveStats')} description={t('MoveStatsShortDesc')} awards={[t('FEBRACE'), t('FEMIC')]} />
          <ProjectCard title={t('Chat')} description={t('ChatShortDesc')} />
          <ProjectCard title={t('Overview')} description={t('OverviewShortDesc')} />
          <ProjectCard title={t('Audire')} description={t('AudireShortDesc')} />
        </Carousel>
      </Section>
      <Section id="Footer">
        <div data-animation="animate__slideInLeft footer" className="animate__animated animate__faster">
            <center>Developed by Heitor Silva<br /><a href="mailto:heitor.freitassilva@outlook.com" style={{textDecoration: 'none', color: '#FFF'}}>heitor.freitassilva@outlook.com</a><br />+55 (11) 92006-9376</center>
        </div>
      </Section>
    </>
  );
};

export default Main;
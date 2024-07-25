import React, { useState, useRef, useEffect } from "react";
import '../css/Projects.css';
import Project from "../components/Project";
import Tags from "../components/Tags";
import Carousel from '../components/Carousel'

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const carouselRef = useRef();

    useEffect(() => {
        let param = new URLSearchParams(window.location.search).get('project');
        if (!!param)
        {
            setSearch(param);
            document.querySelector('.search-input').value = param;
        }
    }, []);

    const switchTag = (tag) => {
        if (tagsSelected.includes(tag))
            setTagsSelected(tagsSelected.filter(cTag => cTag !== tag));
        else
            setTagsSelected(tagsSelected.concat(tag));
    }

    const getProjects = () => {
        let projects = require('../Projects.json');
        return projects;
    }

    const projectClick = (children, title, longDesc) => {
        let overlay = document.getElementById('projects-overlay');
        overlay.style.display = 'block';
        let modal = document.querySelector('.project-modal');
        modal.style.display = 'block';

        let images = '';
        for (let image in children) {
            images += '<div class="project-modal-image-container"><img class="project-modal-image" src="' + children[image].props.children.props.src + '" alt="Project image" /></div>';
        }
        modal.children[1].children[0].children[1].innerHTML = images;
        document.querySelector('.project-modal-description').textContent = longDesc;
        
        setTimeout(() => {
            overlay.style.opacity = '.6';
            modal.classList.remove('project-modal-hide');
        }, 1);
    }

    const modalCloseClick = (e) => {
        carouselRef.current.setCarouselIndex(0);
        let overlay = document.getElementById('projects-overlay');
        overlay.style.opacity = '0';
        let modal = e.currentTarget.parentElement.parentElement;
        modal.classList.add('project-modal-hide');
        setTimeout(() => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }, 500);
    }

    return (
        <>
            <div className="projects-grid">
                <div className="projects-goback">
                    <FontAwesomeIcon icon={faAngleLeft} style={{cursor: 'pointer'}} onClick={() => navigate('/')} />
                </div>
                <div className="projects">
                    <div className="project-search">
                        <div className="search-input-container">
                            <input className="search-input" onChange={(e) => {setSearch(e.target.value)}} placeholder={t("ProjectSearchPlaceHolder")} />
                        </div>
                        <div className="tags">
                            <Tags switchTag={switchTag} name=".NET" />
                            <Tags switchTag={switchTag} name=".NET MVC" />
                            <Tags switchTag={switchTag} name="Arduino" />
                            <Tags switchTag={switchTag} name="Aseprite" />
                            <Tags switchTag={switchTag} name="Blender" />
                            <Tags switchTag={switchTag} name="C#" />
                            <Tags switchTag={switchTag} name="C++" />
                            <Tags switchTag={switchTag} name="CSS" />
                            <Tags switchTag={switchTag} name="Entity Framework" />
                            <Tags switchTag={switchTag} name="Firebase" />
                            <Tags switchTag={switchTag} name="Google APIs" />
                            <Tags switchTag={switchTag} name="HTML" />
                            <Tags switchTag={switchTag} name="Java" />  
                            <Tags switchTag={switchTag} name="Javascript" />
                            <Tags switchTag={switchTag} name="MongoDB" />
                            <Tags switchTag={switchTag} name="MySQL" />
                            <Tags switchTag={switchTag} name="Python" />
                            <Tags switchTag={switchTag} name="React" />
                            <Tags switchTag={switchTag} name="React Native" />
                            <Tags switchTag={switchTag} name="SQL" />
                            <Tags switchTag={switchTag} name="SSMS" />
                            <Tags switchTag={switchTag} name="Unity" />
                            <Tags switchTag={switchTag} name="WinForms" />
                        </div>
                        <div className="division"></div>
                    </div>                    
                    <div className="projects-container">
                        {
                            getProjects().projects.filter(project => {
                                return tagsSelected.length === 0 ? true : tagsSelected.every(tag => project.tags.includes(tag));
                            }).filter(project => {
                                return project.title.length === 0 ? true : t(project.title).toLowerCase().includes(search.toLowerCase());
                            }).map((element) => {
                                return (
                                    <Project title={t(element.title)} shortDesc={t(element.title + 'ShortDesc')} longDesc={t(element.title + 'LongDesc')} projectClick={projectClick}>
                                        {element.images.map((image) => {
                                            return (<div className="project-modal-image-container"><img className="project-modal-image" src={require(`../media/projects/${image.src}`)} alt={image.alt} /></div>)
                                        })}
                                    </Project>
                                );
                            })
                        }
                    </div>
                    <hr style={{width: '90%'}} />
                    <center><div className="projects-alert">{t('ProjectsAdding')}</div></center>
                </div>
            </div>
            <div className="project-modal project-modal-hide">
                <div className="project-modal-header">
                    <button className="project-modal-close" onClick={modalCloseClick}>✖</button>
                </div>
                <div className="project-big-carousel">
                    <Carousel ref={carouselRef}>
                        <img className="project-modal-image" src={require('../media/projects/Chat01.png')} alt="o" />
                        <img className="project-modal-image" src={require('../media/projects/Chat01.png')} alt="o" />
                        <img className="project-modal-image" src={require('../media/projects/Chat01.png')} alt="o" />
                    </Carousel>
                </div>
                <hr style={{width: '90%', borderColor: '#444', marginTop: '10px', marginBottom: '50px'}} />
                <div className="project-modal-description">
                Chatting app made with ReactJS and Firebase. This project was essentially developed aiming a growth of my ReactJS capabilities, while also learning the basics about Firebase. It took just over three weeks for it to be completed.
                </div>
            </div>
            <div id="projects-overlay"></div>
        </>
    );
};

export default Projects;
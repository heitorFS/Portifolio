import React, { useState } from "react";
import '../css/Projects.css';
import Project from "../components/Project";
import Tags from "../components/Tags";
import Carousel from '../components/Carousel'

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";

const Projects = () => {
    const [tagsSelected, setTagsSelected] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

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

    const projectClick = (children, title, shortDesc) => {
        let overlay = document.getElementById('projects-overlay');
        overlay.style.display = 'block';
        let modal = document.querySelector('.project-modal');
        modal.style.display = 'block';

        let images = '';
        for (let image in children) {
            images += '<img class="project-modal-image" src="' + children[image].props.src + '" alt="o" />';
        }
        modal.children[1].children[0].children[1].innerHTML = images;
        
        setTimeout(() => {
            overlay.style.opacity = '.6';
            modal.classList.remove('project-modal-hide');
        }, 1);
    }

    const modalCloseClick = (e) => {
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
                            <input className="search-input" onChange={(e) => {setSearch(e.target.value)}} placeholder="Type project name" />
                        </div>
                        <div className="tags">
                            <Tags switchTag={switchTag} name=".NET" />
                            <Tags switchTag={switchTag} name=".NET MVC" />
                            <Tags switchTag={switchTag} name="Aseprite" />
                            <Tags switchTag={switchTag} name="Blender" />
                            <Tags switchTag={switchTag} name="C" />
                            <Tags switchTag={switchTag} name="C#" />
                            <Tags switchTag={switchTag} name="C++" />
                            <Tags switchTag={switchTag} name="CSS" />
                            <Tags switchTag={switchTag} name="Entity Framework" />
                            <Tags switchTag={switchTag} name="Firebase" />
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
                                return project.title.length === 0 ? true : project.title.toLowerCase().includes(search.toLowerCase());
                            }).map((element) => {
                                return (
                                    <Project title={element.title} shortDesc={element.shortDesc} projectClick={projectClick}>
                                        {element.images.map((image) => {
                                            return (<img className="project-modal-image" src={require(`../media/projects/${image.src}`)} alt={image.alt} />)
                                        })}
                                    </Project>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="project-modal project-modal-hide">
                <div className="project-modal-header">
                    <button className="project-modal-close" onClick={modalCloseClick}>✖</button>
                </div>
                <div className="project-big-carousel">
                    <Carousel>
                        <img className="project-modal-image" src={require('../media/projects/Chat01.png')} alt="o" />
                        <img className="project-modal-image" src={require('../media/projects/Chat01.png')} alt="o" />
                        <img className="project-modal-image" src={require('../media/projects/Chat01.png')} alt="o" />
                    </Carousel>
                </div>
                <div className="project-modal-description">
                    
                </div>
            </div>
            <div id="projects-overlay"></div>
        </>
    );
};

export default Projects;
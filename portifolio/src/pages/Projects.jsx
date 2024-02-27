import React from "react";
import '../css/Projects.css';
import Project from "../components/Project";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();
    return (
        <div className="projects-grid">
            <div className="projects-goback">
                <FontAwesomeIcon icon={faAngleLeft} style={{cursor: 'pointer'}} onClick={() => navigate('/')} />
            </div>
            <div className="projects-container">
                <Project title="Chat" shortDesc="Firebase based chat application">
                    <img src={require('../media/projects/ChatThumb.png')} alt="Chat thumbnail" />
                    <img src={require('../media/projects/Chat01.png')} alt="Chat 01" />
                    <img src={require('../media/projects/Chat02.png')} alt="Chat 02" />
                </Project>
                <Project title="Chat" shortDesc="Firebase based chat application">
                    <img src={require('../media/projects/ChatThumb.png')} alt="Chat thumbnail" />
                </Project>
                <Project title="Chat" shortDesc="Firebase based chat application">
                    <img src={require('../media/projects/ChatThumb.png')} alt="Chat thumbnail" />
                </Project>
                <Project title="Chat" shortDesc="Firebase based chat application">
                    <img src={require('../media/projects/ChatThumb.png')} alt="Chat thumbnail" />
                </Project>
            </div>
        </div>
    );
};

export default Projects;
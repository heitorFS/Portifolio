import React from "react";

const ProjectCard = ({ title, description, awards = [] }) => {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <div><h2>{title}</h2></div>
                <div className="awards">{awards.length !== 0 ? awards.map((award) => {
                    return (
                        <>
                            <i className="fa-solid fa-award award"></i>
                            <div className="award-description">{award}</div>
                        </>
                    )
                }) : ''}</div>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard;
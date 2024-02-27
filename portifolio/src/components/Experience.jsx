import React from "react";

const Experience = ({ name, picture, startDate, endDate, role, skills }) => {
    return (
        <div className="experience-card">
            <div className="experience-title">
                <div>
                    <h2>{name}</h2>
                </div>
                <div className="experience-picture">
                    <img src={require(`../media/experiences/${picture}.png`)} alt={name} />
                </div>
            </div>
            <div className="experience-content">
                <div>
                    <div className="experience-content-title">Start date: </div>
                    <div className="experience-content-value">{startDate}</div>
                </div>
                <div>
                    <div className="experience-content-title">End date: </div>
                    <div className="experience-content-value">{endDate}</div>
                </div>
                <div>
                    <div className="experience-content-title">Role: </div>
                    <div className="experience-content-value">{role}</div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
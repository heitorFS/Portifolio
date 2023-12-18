import React from "react";

const Skill = ({ id, percentage, workingSince, projectCount }) => {
    const monthDiff = (d1) => {
        var months, years, today = new Date();
        years = today.getFullYear() - d1.getFullYear();
        if (years > 0)
            return years + ' years';

        months = years * 12 - d1.getMonth();
        months += today.getMonth();
        return months + ' months';
    }

    return (
        <div className="skill-container">
            <div data-fill={percentage} className="skill">
                <div className="skill-content">{id}</div>
            </div>
            <div className="skill-details">
                <div className="skill-details-col">Experience:</div>
                <div className="skill-details-val">{monthDiff(workingSince)}</div>
                <div className="skill-details-col">Project count:</div>
                <div className="skill-details-val">{projectCount}</div>
            </div>
        </div>
    );
};

export default Skill;
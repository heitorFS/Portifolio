import React from "react";

const Skill = ({ id, percentage }) => {
    return (
        <div data-fill={percentage} className="skill-container">
            <div className="skill">{id}</div>
        </div>
    );
};

export default Skill;
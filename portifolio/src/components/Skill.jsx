import React from "react";
import { useTranslation } from "react-i18next";

const Skill = ({ id, percentage, years, projectCount }) => {
    const { t } = useTranslation();
    return (
        <div className="skill-container">
            <div data-fill={percentage} className="skill">
                <div className="skill-content">{id}</div>
            </div>
            <div className="skill-details">
                <div className="skill-details-col">{t('Experience')}:</div>
                <div className="skill-details-val">{years + ' ' + t('Years')}</div>
            </div>
        </div>
    );
};

export default Skill;
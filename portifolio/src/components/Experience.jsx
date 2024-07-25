import React from "react";
import { useTranslation } from "react-i18next";

const Experience = ({ name, picture, startDate, endDate, role, skills }) => {
    const { t } = useTranslation();
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
                    <div className="experience-content-title">{t('StartDate')}: </div>
                    <div className="experience-content-value">{startDate}</div>
                </div>
                <div>
                    <div className="experience-content-title">{t('EndDate')}: </div>
                    <div className="experience-content-value">{endDate}</div>
                </div>
                <div>
                    <div className="experience-content-title">{t('Role')}: </div>
                    <div className="experience-content-value">{role}</div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
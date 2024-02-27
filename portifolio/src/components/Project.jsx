import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Project = ({ children, title, shortDesc }) => {
    let right = 0;
    let timerId = 0;
    const mouseEnter = (e) => {
        var images = e.currentTarget.children[0];
        timerId = setInterval(function () {
            debugger;
            right += 500;
            images.style.right = (right % images.scrollWidth) + 'px';
        }, 1000);
    }
    
    const mouseLeave = (e) => {
        clearInterval(timerId)
    }

    return (
        <>
            <div className="project" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <div className="project-image">
                    {children}
                </div>
                <div className="project-info-container">
                    <div className="project-offset-container">
                        <div className="project-info-tab project-offset"></div>
                        <div className="project-info project-offset"></div>
                    </div>
                    <div className="project-info-main">
                        <div className="project-info-tab"></div>
                        <div className="project-info"></div>
                        <div className="project-info-text">
                            <div className="project-title">{title}</div>
                            <div>{shortDesc}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-modal">
                <div className="project-big-carousel">
                    {children}
                    <div className="project-arrow"><FontAwesomeIcon icon={faAngleRight} /></div>
                    <div className="project-arrow"><FontAwesomeIcon icon={faAngleLeft} /></div>
                </div>
            </div>
        </>
    );
};

export default Project;
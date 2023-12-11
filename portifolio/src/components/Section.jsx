import React from "react";
import { faAngleRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";

const Section = ({ id, children, secDesc = null, fade = false, onCarouselChange = null }) => {
    let navigate = useNavigate();
    return (
        <div id={id} className={`section ${secDesc != null ? 'section-divide' : ''}`}>
            {secDesc != null ? (
                <>
                    <div className="section-description">
                        <div>
                            <h1>{id}</h1>
                            <p>{secDesc}</p>
                        </div>
                        <div className="section-more" onClick={() => {navigate('/projects')}}>See more {id.toLowerCase()}&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRightLong} /></div>
                    </div>
                    <div className="carousel-container">
                        {children}
                        <div className="carousel-control carousel-right" onClick={onCarouselChange} ><FontAwesomeIcon icon={faAngleRight} /></div>
                    </div>
                </>
            ) : (
                <div>{children}</div>
            )}
        
            {fade ? <div className="overlay-fade"></div> : ''}
        </div>
    );
};

export default Section;
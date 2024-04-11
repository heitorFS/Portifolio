import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom";

const Section = ({ id, children, secDesc = null, fade = false, more = false, cardGrid = false }) => {
    const navigate = useNavigate();
    return (
        <div id={id} className={`section ${secDesc != null ? 'section-divide' : cardGrid ? 'section-card-grid' : ''}`}>
            {secDesc != null ? (
                <>
                    <div className="section-description">
                        <div>
                            <h1>{id}</h1>
                            <p>{secDesc}</p>
                        </div>
                        {more ? <div className="section-more" onClick={() => {navigate('/projects')}}>See more {id.toLowerCase()}&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRightLong} /></div> : ''}
                    </div>
                    {children}
                </>
            ) : (
                <>{children}</>
            )}
        
            {fade ? <div className="overlay-fade"></div> : ''}
        </div>
    );
};

export default Section;
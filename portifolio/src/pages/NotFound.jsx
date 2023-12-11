import React from "react";
import '../css/NotFound.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <FontAwesomeIcon className="not-found-bomb" icon={faBomb} />
            <div className="not-found-text">
                <div className="not-found-title">Oops, I don't think this exists</div>
                <div>I guess this page exploded on the road to your device.</div>
            </div>
        </div>
    );
};

export default NotFound;
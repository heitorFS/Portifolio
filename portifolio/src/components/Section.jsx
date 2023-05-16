import React from "react";

const Section = ({ id, children}) => {
    return (
        <div id={id} className="section">
            {children}
        </div>
    );
};

export default Section;
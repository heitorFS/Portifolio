import React from "react";

const HeaderLink = ({ to, children }) => {
    return (
        <a className="header-link" href={`/#${to}`}>
            <div className="header-button">
                {children}
            </div>
        </a>
    )
};

export default HeaderLink;
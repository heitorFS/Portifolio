import React from "react";

const HeaderLink = ({ to, children }) => {
    return (
        <div className="header-button">
            <a className="header-link" href={`/#${to}`}>
                {children}
            </a>
        </div>
    )
};

export default HeaderLink;
import React from "react";

const HeaderLink = ({ to, children }) => {
    return (
        <div className="header-button">
            {children}
        </div>
    )
};

export default HeaderLink;
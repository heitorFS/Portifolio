import React from "react";

const HeaderLink = ({ to, children }) => {
    const scrollDown = () => {
        let el = document.getElementById(to).getBoundingClientRect();
        window.scrollTo(0, el.top + window.scrollY)
        
    };

    return (
        <div className="header-button header-link" onClick={scrollDown}>
            {children}
        </div>
    )
};

export default HeaderLink;
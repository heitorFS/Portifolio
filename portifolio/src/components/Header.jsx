import React from "react";
import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <div data-animation="animate__slideInRight" className="header animate__animated animate__faster">
            <HeaderLink to="Start">Start</HeaderLink>
            <HeaderLink to="Biography">Biography</HeaderLink>
            <HeaderLink to="Skills">Skills</HeaderLink>
            <HeaderLink to="Experience">Experience</HeaderLink>
            <HeaderLink to="Projects">Projects</HeaderLink>
            <HeaderLink to="Quotes">Quotes</HeaderLink>
        </div>
    )
};

export default Header;
import React from "react";
import '../css/Header.css';

import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <div className="header">
            <div className="header-info">
                <div className="logo">
                    <img alt="Logo" src="" />
                </div>
                <div className="title">
                    My portifolio
                </div>
            </div>
            <div className="header-commands">
                <HeaderLink to="Biography">Biography</HeaderLink>
                <HeaderLink to="Skills">Skills</HeaderLink>
                <HeaderLink to="Experience">Experience</HeaderLink>
                <HeaderLink to="Projects">Projects</HeaderLink>
                <HeaderLink to="Quotes">Quotes</HeaderLink>
            </div>
        </div>
    );
};

export default Header;
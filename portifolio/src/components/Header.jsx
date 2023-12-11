import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleBarsClick = () => {
        const links = document.querySelector('.header-link-container');
        if (!openMenu)
            links.style.maxHeight = '600px';
        else
            links.style.maxHeight = '0';

        setOpenMenu(prevOpenMenu => prevOpenMenu = !prevOpenMenu);
    }

    return (
        <div data-animation="animate__slideInRight" className="header animate__animated animate__faster">
            <FontAwesomeIcon onClick={handleBarsClick} id="header-bars" icon={faBars} />
            <div className="header-link-container animate__backInDown">
                <HeaderLink to="Start">Start</HeaderLink>
                <HeaderLink to="Biography">Biography</HeaderLink>
                <HeaderLink to="Skills">Skills</HeaderLink>
                <HeaderLink to="Experience">Experience</HeaderLink>
                <HeaderLink to="Projects">Projects</HeaderLink>
                <HeaderLink to="Quotes">Quotes</HeaderLink>
            </div>
        </div>
    )
};

export default Header;
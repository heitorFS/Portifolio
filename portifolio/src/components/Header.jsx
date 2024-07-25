import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { t } = useTranslation();

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
                <HeaderLink to="Start">{t('Start')}</HeaderLink>
                <HeaderLink to="Biography">{t('Biography')}</HeaderLink>
                <HeaderLink to="Skills">{t('Skills')}</HeaderLink>
                <HeaderLink to="Experience">{t('Experience')}</HeaderLink>
                <HeaderLink to="Projects">{t('Projects')}</HeaderLink>
            </div>
        </div>
    )
};

export default Header;
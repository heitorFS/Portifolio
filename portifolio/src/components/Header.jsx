import React from "react";
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
                <HeaderLink to="">Biography</HeaderLink>
            </div>
        </div>
    );
};

export default Header;